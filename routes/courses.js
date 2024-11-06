// routes/courses.js
/**
 * @openapi
 * /api/getCourses:
 *   get:
 *     description: Get all Courses
 *     responses:
 *       200:
 *         description: A list of courses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The course's ID
 *                   title:
 *                     type: string
 *                     description: The course's name
 */
try {
    app.get('/api/getCourses', (req, res,) => {
        fs.readFile(__dirname + "/" + "courses.json", 'utf8', function (err, data) {
            console.log(data);
            res.end(data);
        });

    })
} catch (e) {
    console.error(e);
}
/**
 * @openapi
 * '/api/courses/{courseId}':
 *  get:
 *     tags:
 *     - Courses
 *     summary: Get a single course
 *     parameters:
 *      - name: courseId
 *        in: path
 *        description: The id of the course
 *        required: true
 *     responses:
 *       200:
 *         description: Course Details
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The course's ID
 *                   title:
 *                     type: string
 *                     description: The course's name
 *       404:
 *            description: Course not found
 */
try {
    app.get('/api/courses/:courseId', function (req, res) {
        fs.readFile(__dirname + "/" + "courses.json", 'utf8', function (err, data) {
            var courses = JSON.parse(data);
            var course = courses[req.params.courseId - 1]
            res.end(JSON.stringify(course));
        });
    })
} catch (e) {
    console.error(e);
}
/**
 * @openapi
 * '/api/courses/{courseId}':
 *  delete:
 *     tags:
 *     - Courses
 *     summary: delete a single course
 *     parameters:
 *      - name: courseId
 *        in: path
 *        description: The id of the course
 *        required: true
 *     responses:
 *       200:
 *         description: Delete a Course
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The course's ID
 *                   title:
 *                     type: string
 *                     description: The course's name
 *       404:
 *            description: Course not found
 */
try {
    app.delete('/api/courses/:courseId', function (req, res) {
        fs.readFile(__dirname + "/" + "courses.json", 'utf8', function (err, data) {
            data = JSON.parse(data);
            delete data[req.params.courseId - 1];
            //saveData(data);
            res.end(JSON.stringify(data));
        });
    })
} catch (e) {
    console.error(e);
}


/**
* @openapi
* '/api/addCourse':
*  post:
*     tags:
*     - Course
*     summary: Add a course
*     requestBody:
*      required: true
*      content:
*        application/json:
*           schema:
*             type: object
*             properties:
*               id:
*                 type: integer
*                 description: The course's ID
*               title:
*                 type: string
*                 description: title of the course
*               description:
*                 type: string
*                 description: description
*     responses:
*       200:
*         description: add a Course
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*                 properties:
*                   id:
*                     type: integer
*                     description: The course's ID
*                   title:
*                     type: string
*                     description: The course's name
*       404:
*            description: Course not found
*/
try {
    app.post('/api/addCourse', function (req, res) {
        var course = req.body;
        fs.readFile(__dirname + "/" + "courses.json", 'utf8', function (err, data) {
            data = JSON.parse(data);
            data.push(course);
            res.end(JSON.stringify(data));
        });
    })
} catch (e) {
    console.error(e);
}
