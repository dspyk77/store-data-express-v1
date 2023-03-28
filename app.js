var express = require('express')
var app = express()

app.use(express.static("public"))

app.use(express.json())

users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    weight: 183.5
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 23,
    weight: 146.3
  }
]

app.get("/api", async function (request, response) {
  response.end("Welcome to my API")
})

app.get("/api/users", async function (request, response) {
  response.json(users)
})

app.get("/api/user/:id", async function (request, response) {
  /*
    NOTE: This endpoint does the exact same thing as the
    2 endpoints below that are commented out. Placing `:id` in
    the specified URL path for this endpoint allows the user
    to provide whatever value they like and we can capture it
    with this line of code:
  */
  var id = request.params.id

  /*
    CONTINUED: If we changed the path to "/api/user/:cat",
    then we could access that value with `request.params.cat`.
    Also, if you want to use multiple words for a path variable
    like this, then you would use lowerCamelCase, like so:
    "/api/user/:myCoolVariable"
    `request.params.myCoolVariable`
  */

  response.json(users[id])
})

// app.get("/api/user/0", async function(request, response) {
// 	response.json(users[0])
// })

// app.get("/api/user/1", async function(request, response) {
// 	response.json(users[1])
// })

app.listen(3000, function() {
  console.log("App listening on port 3000")
})

module.exports = app
