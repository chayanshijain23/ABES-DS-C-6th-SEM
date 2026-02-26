const express=require('express');
const app=express();
const port=8000;

const student=[
    {
    name:"Rohit",
    class:"B.tech"
}
]
app.get('/read' ,(req,res)=>{
    res.send("hii this is my read page");
});
app.listen(port,()=>{
    console.log(`Server is running on port ar :http://localhost:${port}`);
})

app.get('/' ,(req,res)=>{
    res.send("<h1> Hii, this is my first server </h1>");
});

app.get('/about' ,(req,res)=>{
    res.send("this is my about page");
});
 

app.get('/img' ,(req,res)=>{
    res.send("<img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbmUU4HdK3EDNVVRlBKNm3CxaAKPTlGFU1sA&s' ></img>");
});