const mongoose  = require("mongoose");

const studentSchema = new mongoose.Schema({
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
    mentorId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Mentor'
    }
});

module.exports = mongoose.model('student', studentSchema);