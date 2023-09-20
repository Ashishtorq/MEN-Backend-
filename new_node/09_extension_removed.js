const express = require('express');
const path = require('path');
const app = express();
const getPath = path.join(__dirname,'Public');

app.get('',(req,resp)=>{
    resp.sendFile(`${getPath}/01_about.htm`)   // used to remove extension(.htm) from url 
})

app.get('*',(req,resp)=>{
    resp.sendFile(`${getPath}/02_error404.htm`)   // used to remove extension(.htm) from url 
})

app.listen(3001);