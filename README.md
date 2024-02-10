Steps: To access the student mentors API

// To get the student list

      https://student-mentor-o635.onrender.com/

       --> Ex :  https://student-mentor-o635.onrender.com/api/student/

// To get the mentor list

     https://student-mentor-o635.onrender.com/api/mentor/

     --> /* https://student-mentor-o635.onrender.com/api/mentor/ */ 

// To create a student instance

      https://student-mentor-o635.onrender.com/create

      --> Ex :  https://student-mentor-o635.onrender.com/api/student/create/

// To create a mentor instance

      https://student-mentor-o635.onrender.com/api/mentor/create

      --> /* https://student-mentor-o635.onrender.com/api/mentor/create */ 

// To assign a mentor to a student

      https://student-mentor-o635.onrender.com/api/student//mentors/:mentorId/students/:studentId

      --> Ex : https://student-mentor-o635.onrender.com/api/student/mentors/65c2948cb7d61aa8ff71a97a/students/65c7cad92f14807a3c94da91

// To add multiple students to the mentor

https://student-mentor-o635.onrender.com/api/student//mentors/:mentorId/studentIds

--> Ex : https://student-mentor-o635.onrender.com/api/student/mentors/65c786c8c59d02393bdc7db6/studentIds

     {
       "studentIds" : ["65c7cad92f14807a3c94da91", "65c7caf92f14807a3c94da93"]
     }
   
// To assign or change mentor for the student

      https://student-mentor-o635.onrender.com/api/student//:studentId/mentors/:mentorId

      --> /* https://student-mentor-o635.onrender.com/api/student/65c7cad92f14807a3c94da91/mentors/65c786c8c59d02393bdc7db6 */

     {
       "mentorId" : "65c786c8c59d02393bdc7db6"
     }

// To get all the students on one mentor

      https://student-mentor-o635.onrender.com/api/mentor/getStudents/mentor/:mentorId

      --> /* https://student-mentor-o635.onrender.com/api/mentor/getStudents/mentor/65c786c8c59d02393bdc7db6 */ 

// Routes for getting previous mentor information

      https://student-mentor-o635.onrender.com/api/student/students/:studentId/previous-mentor

      -->  /* https://student-mentor-o635.onrender.com/api/student/students/65c7cad92f14807a3c94da91/previous-mentor */ 
