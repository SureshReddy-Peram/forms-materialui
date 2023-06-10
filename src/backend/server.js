const fs = require('fs');
const express = require("express")

const server = express()
//var cors = require('cors')        //Cross-origin resource sharing enabled
var bodyParser = require('body-parser');

server.use(bodyParser.json())
//server.use(cors())
server.use( function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//server.listen(9000, ()=>{ console.log('express server is running at port number 9000')});

//POST Method
server.post(`/add_questions/:doc_id`, (req, res) => {
    var docs_data = req.body;
    var name = req.params.doc_id;
    console.log(docs_data)
    let data = JSON.stringify(docs_data);
    fs.writeFileSync(`files/${name}.json`, data);
})

//GET Method
server.get(`/data/:doc_id`, (req, res) => {
    var docId = req.params.doc_id;
    fs.readFile(`files/${docId}.json`, (err, data) => { 
        if(err) throw err;
        let ques_data = JSON.parse(data);
        console.log(req.params.doc_id)
        res.send(ques_data);
    })
})