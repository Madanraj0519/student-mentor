const mongoose = require('mongoose');
const dotenv = require('dotenv').config();


async function databaseConnection(){
    try{
        const response = await mongoose.connect(process.env.MONGODB_URL);
        if(response.connections.length > 0){
            console.log('database connection established successfully');
        }else{
            throw new Error('database connection failed');
        }
    }catch(e){
        console.log(e.message);
    }
}

module.exports = databaseConnection;