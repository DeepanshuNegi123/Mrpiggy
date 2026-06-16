import app from  './app.js'



app.get('/',(req,res)=>{
    console.log("entered inside the home page");
    res.send("hello client");
})

app.listen(3000,()=>{
    console.log("listening on port 3000");
})