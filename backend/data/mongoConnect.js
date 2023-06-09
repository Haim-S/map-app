const mongoose = require("mongoose");


async function mongooseConnection (){
    try {
        await mongoose.connect(process.env.LOCAL_MONGODB);
        console.log("MongoDB Connected!");
    } catch (error) {
        console.log(error);
    }

}

module.exports = mongooseConnection;