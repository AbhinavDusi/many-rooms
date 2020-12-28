const Express = require('express'); 
const app = Express(); 

app.get('/f/:floor', (req, res) => {
    const floorReq = req.params.floor; 
    let array = []; 
    res.json(array);
}); 

app.listen(5000, () => {
    console.log("Listening on port 5000");
}); 