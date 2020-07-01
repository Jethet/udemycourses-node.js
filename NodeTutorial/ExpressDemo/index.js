const express = require('express')
const app = express()

const courses = [
  {id: 1, name: 'course1'},
  {id: 2, name: 'course2'},
  {id: 3, name: 'course3'}
]

app.get('/', (req, res) => {
  res.send("Hello world!!!")
})

app.get('/api/courses', (req, res) => {
  res.send(courses)
})

// Add a new course: this goes to the collection of courses
// a. Read the course object that should be in the body of the request
// b. Use its properties to create a new course object
// c. Add that course object to the courses array
app.post('/api/courses', (req, res) => {

})

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id))
  if (!course) res.status(404).send("This course was not found.")
  res.send(course)
})

//PORT: environment variable, set outside the file
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log((`Listening on port ${port} ...`));
})