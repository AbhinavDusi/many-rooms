const Express = require('express'); 
const bodyParser = require('body-parser');
const mysql = require('mysql'); 
const moment = require('moment'); 

const PORT_SERVER = 5000; 
const PORT_WEBSOCKET = 5002; 
const PARTY_TIME = 50000; 

const app = Express(); 

const jsonParser = bodyParser.json(); 

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '6Fsb2002',
    database: 'many_rooms',
    multipleStatements: true
};   

class Database {
    constructor(config) {
        this.connection = mysql.createConnection(config); 
    }
    query(sql, parser) {
        return new Promise ((resolve, reject) => {
            this.connection.query(sql, parser, (err, result) => {
                resolve(result); 
            }); 
        }); 
    }
}

const db = new Database(dbConfig); 

const io = require('socket.io')(PORT_WEBSOCKET, {
    cors: { origin: "http://localhost:3000" }
});

disbandRoom = id => {
    let sqlQuery = `
        UPDATE parties 
        SET status = 0
        WHERE party_id = ${id};
    `; 
    db.query(sqlQuery); 
}

const roomActive = id => {
    return new Promise ((resolve, reject) => {
        let sqlQuery = `
            SELECT p.time_limit 
            FROM parties p
            WHERE p.status = 1
            AND p.party_id = ${id};
        `; 
        db.query(sqlQuery)
            .then(result => resolve(result));
    }); 
}

const sendMessage = (id, userID, msg, time) => {
    return new Promise((resolve, reject) => {
        let sqlQuery = `
            INSERT INTO messages (
                content,
                party_id, 
                user_id,
                time
            )
            VALUES (
                '${msg}',
                ${id},
                ${userID},
                '${time}'
            );
            SELECT *
            FROM messages m
            WHERE m.party_id = ${id};
        `; 
        db.query(sqlQuery)
            .then(result => resolve(result[1].length));
    }); 
}

const getMessages = id => {
    return new Promise((resolve, reject) => {
        let sqlQuery = `
            SELECT 
                u.user_id as userID,
                u.display_name as username,
                m.content as msg,
                m.message_id as messageKey,
                m.time
            FROM users u
            JOIN messages m
            ON u.user_id = m.user_id
            WHERE m.party_id = ${id};
        `; 
        db.query(sqlQuery)
            .then(result => resolve(result)); 
    }); 
}

io.on('connection', socket => {
    socket.on('joinRoom', ({userID, username, room}) => {
        socket.join(room); 
        getMessages(room).then(result => {
            socket.emit('getAllMessages', result);
            if (result.length === 1) {
                setTimeout(() => {
                    io.to(room).emit('endParty'); 
                    disbandRoom(room); 
                }, PARTY_TIME); 
            }
        });
        roomActive(room)
            .then(result => {
                const active = result.length === 1; 
                if (!active) {
                    io.to(room).emit('endParty'); 
                } else {
                    const timeLimit = result[0].time_limit; 
                    let canSend = true; 
                    socket.on('sendMessage', msg => {
                        if (canSend) {
                            const time = moment().format('h:mm a');
                            sendMessage(room, userID, msg, time)
                                .then(key => {
                                    io.to(room).emit('receiveMessage', { userID, username, msg, key, time }); 
                                }); 
                            socket.emit('changeCanSend', canSend = false);
                            setTimeout(() => {
                                socket.emit('changeCanSend', canSend = true); 
                            }, 1 /*timeLimit * 1000*/); 
                        }
                    }); 
                }
            }); 
    }); 
}); 

app.get('/p/:id', (req, res) => {
    let sqlQuery = `
        SELECT 
            p.party_id,
            p.title,
            p.status,
            u.display_name,
            u.user_id
        FROM parties p
        JOIN users u
        ON p.host_id = u.user_id
        WHERE p.party_id = ${req.params.id};
    `;
    db.query(sqlQuery)
        .then(result => res.json(result));
});

app.get('/f/:floor', (req, res) => {
    let sqlQuery = `
        SELECT 
            u.display_name as host,
            u.user_id as host_id,
            p.party_id as id,
            p.title,
            p.posts,
            p.attendees,
            p.tags
        FROM parties p
        JOIN users u
        ON p.host_id = u.user_id
        WHERE p.status = 1 
        AND p.floor = '${req.params.floor}';
    `; 
    db.query(sqlQuery)
        .then(result => res.send(result)); 
}); 

app.get('/profile/:id', (req, res) => {
    let response = []; 
    let sqlQueryName = `
        SELECT 
            u.display_name,
            u.user_id
        FROM users u
        WHERE u.user_id = ${req.params.id};
    `;

    let sqlQueryPreviousParties = `
        SELECT 
            u.display_name as host,
            u.user_id as host_id,
            p.party_id as id,
            p.title,
            p.posts,
            p.attendees,
            p.tags
        FROM parties p
        JOIN users u
        ON p.host_id = u.user_id
        WHERE u.user_id = ${req.params.id};
    `;

    let sqlQueryArchivedParties = `
        SELECT 
            u.display_name as host,
            u.user_id as host_id,
            p.party_id as id,
            p.title,
            p.posts,
            p.attendees
        FROM parties p
        JOIN archived_parties ap
        ON ap.party_id = p.party_id 
        AND ap.user_id = ${req.params.id}
        JOIN users u
        ON u.user_id = p.host_id;
    `;

    let sqlQueryFriends = `
        SELECT 
        u.display_name,
        u.user_id
            FROM friends f
            JOIN users u
            WHERE f.first_user_id = u.user_id
            AND f.second_user_id = ${req.params.id};
    `;

    Promise.all([
        db.query(sqlQueryName),
        db.query(sqlQueryPreviousParties),
        db.query(sqlQueryArchivedParties),
        db.query(sqlQueryFriends)
    ]).then(result => res.json(result));
}); 

app.post('/createparty', jsonParser, (req, res) => {
    if (req.body.titleValue.length < 5) {
        res.json({
            err: 1,
            msg: 'The title is too short.'
        });
        return;
    } else if (req.body.titleValue.length > 25) {
        res.json({
            err: 1,
            msg: 'The title is too long.'
        });
        return;
    } else if (req.body.bodyValue.length < 25) {
        res.json({
            err: 1,
            msg: 'The body is too short.'
        }); 
        return;
    } else if (req.body.bodyValue.length > 500) {
        res.json({
            err: 1,
            msg: 'The body is too long.'
        }); 
        return; 
    }
    let sqlQuery = `
        INSERT INTO parties (
            host_id,
            title,
            attendees,
            posts,
            tags,
            status,
            floor,
            time_limit
        )
        VALUES (
            ${1},
            '${req.body.titleValue}',
            ${1},
            ${1},
            '${req.body.tagsValue}',
            ${1},
            '${req.body.floor}',
            '${req.body.timeValue}'
        );
        SELECT LAST_INSERT_ID() party_id;
    `;

    db.query(sqlQuery)
        .then(result => {
            const partyID = result[1][0].party_id; 
            res.json({
                err: 0,
                msg: { partyID }
            }); 

            const time = moment().format('h:mm a');
            sendMessage(partyID, req.body.hostID, req.body.bodyValue, time); 
        }); 
});

app.put('/settings/updatedisplayname/', jsonParser, (req, res) => {
    let sqlQuery = `
        UPDATE users
        SET display_name = ${req.body.newName}
        WHERE user_id = ${req.body.userID};
    `; 
}); 

app.put('/settings/updatepassword/', jsonParser, (req, res) => {
    if (req.body.firstPassword === req.body.secondPassword) {
        let sqlQuery = `
            SELECT password
            FROM users
            WHERE user_id = ${req.body.userID}
        `; 
    }
}); 

app.put('/profile/updatefriends/', jsonParser, (req, res) => {

}); 

app.put('/profile/updatearchived/', jsonParser, (req, res) => {

}); 

app.listen(PORT_SERVER)