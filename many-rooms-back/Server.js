const Express = require('express'); 
const mysql = require('mysql'); 

const app = Express(); 

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '6Fsb2002',
    database: 'many_rooms'
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

}); 

app.get('/p/:id', (req, res) => {
    let sqlQuery = ``;
}); 

app.listen(5000); 