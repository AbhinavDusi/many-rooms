const Express = require('express'); 
const app = Express(); 

app.get('/', (req, res) => {
    res.json({screenToLoad: 0}); 
}); 

app.get('/home', (req, res) => {
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