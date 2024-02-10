const mentorModel = require('../model/mentor.model');
const studentModel = require('../model/student.model');
const studentSchema = require('../model/student.model');


const getStudent = async(req, res) => {
    try{
        const student = await studentSchema.find();

        res.status(200).json({
            message : "student data fetched successfully",
            data : student
        })
    }catch(err){
        res.status(500).json({
            error : err.message
        });
    }
};

const createStudent = async(req, res) => {
    // console.log(req.body);
    const {name, email, phone, batch, mentorId} = req.body;
    const newStudent = new studentSchema({name, email, phone, batch, mentorId});

    try{
        await newStudent.save();

        res.status(201).json({
            success : true,
            message : 'Student created and saved successfully'
        });
    }catch(err){
        res.status(500).json({
            success : false,
            message : 'Internal Server Error'
        });
    }
};


const assignMentor = async(req, res) => {
    try{
        const mentor = await mentorModel.findById(req.params.mentorId);
        const student = await studentModel.findByIdAndUpdate(
            req.params.studentId,
        { mentorId : mentor._id},
        { new : true}
    );
    res.status(200).send({
        success : true,
        message : "Mentor assigned successfully",
        student,
    });

    }catch(err){
        res.status(400).send(err);
    }
}


const addMultipleStudentToMentor = async(req, res) => {
    try{
        const mentorId = req.params.mentorId;
        const studentIds = req.body.studentIds;
        
        const mentor = await mentorModel.findById(mentorId);
        mentor.studentIds = studentIds;
        mentor.save();

        res.status(200).json(
            { 
              success : true,
              message: 'Students assigned to mentor successfully',
              mentor
             });
          
        } catch (err) {
          res.status(400).send(err);
        }
}


const changeMentor = async(req, res) => {
    try{
        const mentorId = req.params.mentorId
        const studentId = req.params.studentId

        const student = await studentModel.findByIdAndUpdate(studentId, {
            mentorId,
        });

        res.status(200).send({
            success : true,
            message: 'mentor has been updated successfully',
            student
        })
    }catch (err) {

    }
};

const getPreviousMentors = async(req, res) => {

    const studentId = req.params.studentId
    const student = await studentModel.findById(studentId);
    const mentor = await mentorModel.findById(student.mentorId);

    res.status(200).send({
        success : true,
        message: 'Mentors previous details fetched successfully',
        mentor
    })
};

module.exports = {
    getStudent,
    createStudent,
    assignMentor,
    addMultipleStudentToMentor,
    changeMentor,
    getPreviousMentors,
};