const http= require('http');
url= require('url');
http.createServer((req,res)=>{
    
    console.log(req.url);
    var q= url.parse(req.url,true).query;
    console.log(q);
    console.log(q.r1);
    var a = Number(q.r1);
    var b = Number(q.s2);
    var area = a*b;
    res.write("Area of the Rectangle is "+area);
    res.end();
    
}).listen(4355);
