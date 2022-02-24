const mongoose = require('mongoose');
const config = require('../../configs');
const uri = config.database.uri;

exports.dbConnect = () => {
    mongoose.connect(uri).then(() => {
        console.log("successfully connected to the DB");
    }).catch((err) => {
        console.log("failed to connect with DB", err);
        process.exit();
    });
}