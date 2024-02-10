const express = require('express');
const bodyParser = require('body-parser');
const databaseConnection = require('./dbConfig');
const { studentRouter } = require('./routes/student.routes');
const { mentorRouter } = require('./routes/mentor.routes');
const cors = require('cors');
require('dotenv').config();


const app = express();
const PORT = 5000;

databaseConnection();


app.use(cors());

app.use(bodyParser.json());


// routing
app.use('/api/student', studentRouter);
app.use('/api/mentor', mentorRouter);

app.listen(PORT, process.env.HOST_NAME, () => {
    console.log(`listening on port http://localhost:${PORT}`);
});