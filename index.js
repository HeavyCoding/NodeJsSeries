const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const session = require('express-session')
const MongoStore = require('connect-mongo').default
const router =  require('./Routes/routes')

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(session({
    name:"authID",
    secret:process.env.SECRET_SESSION_KEY,
    resave:false,
    saveUninitialized:false,
    store: MongoStore.create({
        mongoUrl: process.env.DB_URL,
        collectionName: 'sessions',
        ttl: 60 * 60 * 24
    })
    // cookie:{
    //     maxAge:1000 * 60 * 60 * 24,
    //     httpOnly:false
    // },
}))

app.use(router);

app.set('view engine','ejs')
app.set('views',path.resolve('./App/Views'))
//app.use(express.static('public'))
app.use(express.static(path.join(__dirname,'public')))


mongoose.connect(process.env.DB_URL).then(
    () => { console.log('Connected!')
        app.listen(process.env.PORT,()=>{
            console.log('Connected on', process.env.PORT)
        })
    }
);

