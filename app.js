const express = require('express')
const app = express()

app.use(express.static("public"))

app.use(express.json())

idCounter = 0

products = []

var value = 0
num = value

app.get("/products", async function(request, response) {
  // Respond with the products array
  response.json(products)
  console.log("/products was called!")
  console.log(products)
})

app.get("/api/products", async function (request, response) {
  response.json(products)
  console.log("api/products was called!")
  console.log(products)
})

app.get("/products/:id", async function(request, response) {
  // NOTE: `params` accesses values from the URL path  (:id)
  var id = request.params.id

  var productIndex = findProductIndexById(id)

  // Respond with the specified product
  response.json(products[productIndex])
  console.log("/products/:id was called!")
  console.log(products[productIndex])
})

app.get("/retrieve", async function (request, response) {
  response.json(num)
  console.log("/retrive was called!")
  console.log(num)
})

app.post("/products", async function(request, response) {
  // NOTE: `body` accesses values from the JSON request body
  var providedName = request.body["name"]
  var providedCategory = request.body["category"]
  var providedPrice = request.body["price"]
  var providedWeight = request.body["weight"]

  var nextId = idCounter
  idCounter = idCounter + 1

  var newProduct = {
    id: nextId,
    name: providedName,
    category: providedCategory,
    price: providedPrice,
    weight: providedWeight,
  }
  console.log(newProduct)

  products.push(newProduct)

  // Respond with the new product
  response.json(newProduct)
  console.log("/products was called!")
  console.log(newProduct)
})

app.post("/save", async function(request, response) {
  var providedNum = request.body["value"];
  var newNum = {
    value: providedNum
  }
  console.log(newNum)

  // nums.push(newNum)
  value = newNum;

  // JSON response
  response.json(newNum)
  console.log("Here is your new number!")
  console.log(newNum)
})

app.delete("/products/:id", async function(request, response) {
  // NOTE: `params` accesses values from the URL path
  var id = request.params.id

  var productIndex = findProductIndexById(id);

  products.splice(productIndex, 1);

  // Respond with a message
  response.json({ msg: 'Deleted product' })
})

app.listen(3000, function() {
  console.log("App listening on port 3000")
})

function findProductIndexById(id) {
  for (var i = 0; i < products.length; i++) {
    var product = products[i]
    if (product["id"] == id) {
      return i;
    }
  }
}

module.exports = app
