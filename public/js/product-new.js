let nameInput = document.querySelector("#name-input");
let categoryInput = document.querySelector("#category-input");
let priceInput = document.querySelector("#price-input");
let weightInput = document.querySelector("#weight-input");

async function sendCreateProductRequest() {
  var newProduct = {
    name: nameInput.value,
    category: categoryInput.value,
    price: priceInput.value,
    weight: weightInput.value
  }

  var response = await fetch("/products",
    {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    }
  )

  var product = await response.json()
  console.log(product)
}
