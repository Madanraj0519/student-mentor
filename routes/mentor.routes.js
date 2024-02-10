const express = require('express');
const {getMentor, createMentor, getStudents} = require('../controller/mentor.controller');
const mentorRouter = express.Router();


mentorRouter.get('/', getMentor);
mentorRouter.post('/create', createMentor);
mentorRouter.get('/getStudents/mentor/:mentorId',getStudents);

module.exports = {
    mentorRouter
}