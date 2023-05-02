
var editLink = document.querySelector("#edit-link")

var idColumn = document.querySelector("#id")
var categoryColumn = document.querySelector("#category")
var nameColumn = document.querySelector("#name")
var priceColumn = document.querySelector("#price")
var weightColumn = document.querySelector("#weight")

var productId = getUserIdFromUrlQueryParam()

function updateEditLink() {
  editLink.href = `./product/edit.html?id=${productId}`
}

async function getProduct() {
  var apiUrl = `/products/${productId}`
  console.log(apiUrl)

  var response = await fetch(apiUrl, { method: "GET" })
  var product= await response.json()
  console.log(product)

  idColumn.innerHTML = product["id"]
  categoryColumn.innerHTML = product["category"]
  nameColumn.innerHTML = product["name"]
  priceColumn.innerHTML = product["price"]
  weightColumn.innerHTML = product["weight"]
	// output.innerHTML = JSON.stringify(product)
}

async function sendDeleteUserRequest() {
  var response = await fetch(`/products/${productId}`, { method: "DELETE" })
  var message = await response.json()
  console.log(message)
  location.href=`/products.html`
}

updateEditLink()
getProduct()
