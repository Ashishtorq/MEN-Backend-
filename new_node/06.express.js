const express = require('express');
const app = express();

app.get('',(res,req)=>{
    res.send('This is home page');
})

app.get('/about',(res,req)=>{
    res.send('This is home page');
})

app.listen(4500);