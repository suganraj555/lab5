const http= require('http');
url= require('url');
http.createServer((req,res)=>{
    
    console.log(req.url);
    var q= url.parse(req.url,true).query;
    console.log(q);
    console.log(q.s1);
    var a = Number(q.s1);
    var area = (3.14)*a*a;
    res.write("Area of the circle is "+area);
    res.end();
    
}).listen(8080);
