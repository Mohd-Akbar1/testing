const express=require('express');
const app=express();


app.get('/',function(req,res){
    res.send('render via versel')
})
app.listen(8000,function(){
    console.log('Server is running')
})