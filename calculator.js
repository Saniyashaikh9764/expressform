var express=require('express');
const bodyParser=require('body-parser')
var http=require('http');
var app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/calculator',function(req,res){
 res.sendFile('F:/FullStack/ExpressLab/expressform/htmlfile/calculator.html');   
})

app.post("/submit-data",function(req,res){
    console.log(req.body);
    let n1=Number(req.body.t1);
    let n2=Number(req.body.t2);
    let sum=n1+n2;
    res.send("Total : "+sum);
    console.log(sum)
})

http.createServer(app).listen(3001);