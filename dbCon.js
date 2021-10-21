require('dotenv').config();
const mongoose = require('mongoose');
const password= process.env.password;
const connect = () => {
    //mongodb+srv://RajanKfl:MongoDBMERN@1stproj@cluster0.egfg1.mongodb.net/vsdata?retryWrites=true&w=majority
    mongoose.connect(`mongodb+srv://RajanKfl:MongoDBMERN@1stproj@cluster0.egfg1.mongodb.net/vsdata?retryWrites=true&w=majority`, {
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