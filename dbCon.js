require('dotenv').config();
const mongoose = require('mongoose');
const password= process.env.password;
const connect = () => {
    
    mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    }).then(() => {
        console.log('db connected')
    }).catch((err) => {
        console.log(err);
    });
}

module.exports.db = mongoose;
module.exports.connect = connect;
