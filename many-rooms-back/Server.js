const Express = require('express'); 
const app = Express(); 
app.use(Express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    console.log('Received Request /!');
    res.json({screenToLoad: 0}); 
}); 

app.get('/home', (req, res) => {
    console.log('Received Request /home!');
    res.json({screenToLoad: 0}); 
}); 

app.get('/profile', (req, res) => {
    res.json({screenToLoad: 1}); 
}); 

app.get('/settings', (req, res) => {
    res.json({screenToLoad: 2}); 
}); 

app.get('/support', (req, res) => {
    res.json({screenToLoad: 3}); 
}); 

app.listen(8000); 