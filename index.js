const express = require('express');
const bodyParser = require('body-parser');
const databaseConnection = require('./dbConfig');
const { studentRouter } = require('./routes/student.routes');
const { mentorRouter } = require('./routes/mentor.routes');


const app = express();
const PORT = 5000;

databaseConnection();


app.use(bodyParser.json());


// routing
app.use('/api/student', studentRouter);
app.use('/api/mentor', mentorRouter);

app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
});