const mentorSchema = require('../model/mentor.model');
const studentModel = require('../model/student.model');


const getMentor = async(req, res) => {
    try{
        const mentor = await mentorSchema.find();

        res.status(200).json({
            message : "mentors data fetched successfully",
            data : mentor,
        })
    }catch(err){
        res.status(500).json({
            error : err.message
        });
    }
};

const createMentor = async(req, res) => {
    console.log(req.body);
    const {name, email, phone, batch} = req.body;
    const newMentor = new mentorSchema({name, email, phone, batch});

    try{
        await newMentor.save();

        res.status(201).json({
            success : true,
            message : 'Mentor created and saved successfully'
        });
    }catch(err){
        res.status(500).json({
            success : false,
            message : 'Internal Server Error'
        });
    }
};

const getStudents = async(req, res) => {
    const mentorId = req.params.mentorId;

    const students = await studentModel.find({mentorId});

    res.status(200).send({
        students
    })
}

module.exports = {
    getMentor,
    createMentor,
    getStudents,
};