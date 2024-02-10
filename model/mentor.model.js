const mongoose  = require("mongoose");

const mentorSchema = new mongoose.Schema({
    name : {
        type : 'String',
        required : true,
    },
    email : {
        type : 'String',
        required : true,
        unique : true
    },
    phone : {
        type : 'String',
        required : true,
    },
    batch : {
        type : 'String',
        required : true,
    },
    studentIds : {
        type : [mongoose.Schema.Types.ObjectId],
        ref : 'student'
    }
});

module.exports = mongoose.model('Mentor', mentorSchema);