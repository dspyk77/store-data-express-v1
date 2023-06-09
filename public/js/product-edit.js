
var backLink = document.querySelector("#back-link")

var categoryInput = document.querySelector("#category")
var nameInput = document.querySelector("#name")
var priceInput = document.querySelector("#price")
var weightInput = document.querySelector("#weight")

var productId = getUserIdFromUrlQueryParam()

function updateBackLink() {
  backLink.href = `../product.html?id=${productId}`
}

async function updateInputs() {
  var apiUrl = `/products/${productId}`
  console.log(apiUrl)

  var response = await fetch(apiUrl, { method: "GET" })
  var product = await response.json()
  console.log(product)

  categoryInput.value = product["category"]
  nameInput.value = product["name"]
  priceInput.value = product["price"]
  weightInput.value = product["weight"]
}

async function sendUpdateProductRequest() {
  var apiUrl = `/products/${productId}`
  console.log(apiUrl)

  var updatedProduct = {
    id: productId,
    category: categoryInput.value,
    name: nameInput.value,
    price: priceInput.value,
    weight: weightInput.value
  }
  console.log("---Before fetch---")
  console.log(updatedProduct)
  
  var response = await fetch(apiUrl,
  {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedProduct)
  })

  var product = await response.json()
  console.log("---After fetch---")
  console.log(product)
  location.href=`/products.html`
}

updateBackLink()
updateInputs()
