const mongoose = require('mongoose');

const url = 'mongodb+srv://MernPos:wg4w88DXdSYffEC8@cluster0.clwxeiy.mongodb.net/MernPos'

mongoose.connect(url);

let connectionObj = mongoose.connection;

connectionObj.on('connected', ()=>{
    console.log('Mongodb database Connection Successfully');
});

connectionObj.on('error', ()=>{
   console.log('Mongodb Connection Failed');
})

