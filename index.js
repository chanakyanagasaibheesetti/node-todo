const express = require('express');
const path = require('path');
const port = 8000;

// getting data from mongoose
const Todo = require('./views/config/mongoose');
const app = express();

// section for creating ejs file
app.set('view engine' , 'ejs');
app.set('views' ,path.join(__dirname, 'views'));

// middleware
app.use(express.urlencoded());
app.use(express.static('asset'));

// request for getting schema value from database
app.get('/' , function(req ,res){

Todo.find({} , function(err, todos){
if(err){
    console.log(' find very dengorous thing');
    return;
}
return res.render('home' , {
    title: "todolist",
    Todo_list: todos
    });
   
    });
});

// deleting function
app.get('/delete-todo/:id' , function(req ,res){
    console.log(req.params);
    let id = req.params.id;
 Todo.findByIdAndDelete(id , function(err){
    if(err){
        console.log('error found');
    }
    return res.redirect('back');
 });
    
});

// adding function
app.post('/create-todo', function(req , res){
// 
 Todo.create({
    work: req.body.work,
    date: req.body.date
}, function(err){
    if(err){
        console.log('err');
    }
})

return res.redirect('back');
});

// running server on port
app.listen(port, function(err){
    if(err){
        console.log("error fond" ,err);
    }
    console.log('working' , port);
})
