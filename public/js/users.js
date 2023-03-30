
var output = document.querySelector("#output")

async function getProducts() {
  var response = await fetch("/api/products", { method: "GET" })
  var products = await response.json()

	console.log(products)
	console.log(products[0])
	console.log(products[1])
	console.log(products[0]["name"])
	console.log(products[1]["name"])

	output.innerHTML = JSON.stringify(products)
}
