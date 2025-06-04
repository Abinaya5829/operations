const http = require('http');
const fs = reqiure('fs');

const backend = https.createServer((req,res)=>{
    if(req.method==='GET' && req.url==='/kitkat'){
        res.statusCode=200;
        res.seetHeader('Content-Type','text/plain');
        res.end("kitkat");
    }
    else if(req.method==='GET' && req.url==='/munch'){
        const readFile = ()=>{
            return fetch.readFileSync('data.txt','utf-8');
        }
        const data = readFile();
        res.end(data);

        }
    }
);
backend.listen(5000,()=>{
    console.log("Server Running")
});
