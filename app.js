
const dotenv=require('dotenv');

const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();

app.use(cookieParser())
dotenv.config({path:"./config.env"});
require('./db/conn')
// const User=require('./model/userSchema');
app.use(express.json());
app.use(require('./router/auth'));
const PORT=process.env.PORT || 5000 ;

//middleware
// const middleware=(req,res, next)=>{
// console.log("middleware")
// next();
// }


// app.get('/', (req, res)=>{
// res.send("Hollo World from the server app.js")
// });
// app.get('/about',(req, res)=>{
//     console.log("hello my about")
//     res.send("Hollo about World from the server")
//     });
    app.get('/contact', (req, res)=>{
        res.cookie('Test', 'doulath')
        res.send("Hollo contact World from the server")
        });
        app.get('/signin', (req, res)=>{
            res.send("Hollo login World from the server")
            });
            app.get('/signup', (req, res)=>{
                res.send("Hollo Register World from the server")
                });

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));
    const path=require('path');
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html'))
    })
}


app.listen(PORT, ()=>{
    console.log(`serveris running at port no ${PORT}`)
})