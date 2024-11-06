// app.js or server.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const fs = require('fs');

const app = express();
const port = 3000;

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.get('/api/getCourses', (req,res,)=>{
    fs.readFile(__dirname + "/" + "courses.json", 'utf8', function(err, data){
        res.end(data);
    });});

    app.get('/api/courses/:courseId', function (req, res) {
        fs.readFile( __dirname + "/" + "courses.json", 'utf8', function (err, data) {
           var courses = JSON.parse( data );
           var course = courses[req.params.courseId-1] 
           res.end( JSON.stringify(course));
        });
     })

     app.delete('/api/courses/:courseId', function (req, res) {
        fs.readFile( __dirname + "/" + "courses.json", 'utf8', function (err, data) {
           data = JSON.parse( data );
           delete data[req.params.courseId-1];
           saveData(data);
           res.end( JSON.stringify(data));
        });
     })

     app.post('/api/addCourse', function(req, res){
        var course = req.body;
        fs.readFile(__dirname + "/" + "courses.json", 'utf8', function(err, data){
            data = JSON.parse(data);
       data.push(course);
       saveData(data);
            res.end(JSON.stringify(data));
        });
    })
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



function saveData(data){
    fs.writeFile('./courses.json', ` ${JSON.stringify(data)}`,  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("updates saved in the file!");
        return 'updates saved in the file!';
    });

}

module.exports = { saveData , app };