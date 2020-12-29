const Express = require('express'); 
const bodyParser = require('body-parser');
const mysql = require('mysql'); 

const app = Express(); 
const jsonParser = bodyParser.json(); 

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '6Fsb2002',
    database: 'many_rooms',
    multipleStatements: true
}); 

db.connect();

app.get('/f/:floor', (req, res) => {
    let sqlQuery = `
        SELECT 
            u.display_name as host,
            p.party_id as id,
            p.title,
            p.posts,
            p.attendees,
            p.tags
        FROM parties p
        JOIN users u
        ON p.host_id = u.user_id
        WHERE p.status = 1 
        AND p.floor = '${req.params.floor}'
    `; 
    db.query(sqlQuery, (err, result) => {
        res.send(result); 
    }); 
}); 

app.get('/profile/:id', (req, res) => {
    let sqlQuery = ``;
}); 

app.get('/p/:id', (req, res) => {
    let sqlQuery = ``;
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
            ${0},
            '${req.body.titleValue}',
            ${1},
            ${1},
            '${req.body.tagsValue}',
            ${1},
            '${req.body.floor}',
            '${req.body.timeValue}'
        );
        SELECT 
            LAST_INSERT_ID() party_id;
    `;
    db.query(sqlQuery, (err, result) => {
        res.json({
            err: 0,
            msg: {
                partyID: result[1][0].party_id
            }
        }); 
    }); 
});

app.listen(5000); 