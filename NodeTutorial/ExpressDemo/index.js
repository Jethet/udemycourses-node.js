const Joi = require("@hapi/joi"); // joi returns a class (schema)
const express = require("express");
const { func } = require("@hapi/joi");
const app = express();

// Middleware
app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
  res.send("Hello world!!!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

// Add a new course: this goes to the collection of courses
// a. Read the course object that should be in the body of the request
// b. Use its properties to create a new course object
// c. Add that course object to the courses array
// Always VALIDATE input from client
app.post("/api/courses", (req, res) => {
  const result = validateCourse(req.body)
  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  // by sending the object back to the client, the client gets the id data
  res.send(course);
});

app.put("api/courses/:id", (req, res) => {
  // a) look up the course: if not existing, return 404 (= not found)
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
  return res.status(404).send("This course was not found.");
  }

  // b) validate the course, if invalid return 400 (= bad request)
  const result = validateCourse(req.body)
  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  }

  // c) else: update course and return to the client
  course.name = req.body.name
  res.send(course)
});

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(course);
}

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("This course was not found.");
  res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
  // Look up the course, if not exists: return 404 
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("This course was not found.");
  
  // else: delete
  const index = courses.indexOf(course)
  courses.splice(index, 1)

  // return response to client
  res.send(course)

})

//PORT: environment variable, set outside the file
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port} ...`);
});
