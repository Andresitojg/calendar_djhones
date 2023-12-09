
const express = require ('express')
const app = express();

app.get('/',(req,res) =>{
    res.send('Hello world');
});

app.get('/about',(req,res) =>{
    res.send('about');
});
app.get('/test',(req,res) =>{
    res.send('Test');
});

app.listen(5000,() =>{
    console.log('Server on port 5000');
});
//*actualización sesión 1*//
