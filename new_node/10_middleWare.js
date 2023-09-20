const express = require('express');
const app = express();
const path = require('path');

app.get('/',(resp,req)=>{
    resp.sendFile('Welcome')
})
app.get('/04_contact',(resp,req)=>{
    resp.sendFile('Welcome')
})
app.get('*',(resp,req)=>{
    resp.sendFile('Welcome')
})

app.listen(5500);