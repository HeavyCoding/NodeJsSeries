const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const router =  require('./Routes/routes')

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
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

