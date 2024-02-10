const express = require('express');
const {createStudent, getStudent, assignMentor, addMultipleStudentToMentor, changeMentor, getPreviousMentors} = require('../controller/student.controller');
const studentRouter = express.Router();


studentRouter.get('/', getStudent);
studentRouter.post('/create', createStudent);
studentRouter.post('/mentors/:mentorId/students/:studentId', assignMentor);
studentRouter.post('/mentors/:mentorId/studentIds', addMultipleStudentToMentor);


// To assign or change mentor for the student
studentRouter.put('/:studentId/mentors/:mentorId', changeMentor);

// Routes for getting previous mentor information
studentRouter.get('/students/:studentId/previous-mentor', getPreviousMentors);

module.exports = {
    studentRouter
}