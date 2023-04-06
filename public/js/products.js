const displayProducts = document.querySelector("#display-products");

async function updateTable() {
  var response = await fetch("/products", { method: "GET" })
  var products = await response.json()
  console.log(products)

  for (var i = 0; i < products.length; i++) {
    var product = products[i]

    tableBody.insertAdjacentHTML("beforeend", `
      <tr>
        <td>${product['id']}</td>
        <td>${product['category']}</td>
        <td>${product['name']}</td>
        <td>${product['price']}</td>
        <td>${product['weight']}</td>
        <td>
          <a href="./product.html?id=${product['id']}">Show</a>
        </td>
      </tr>
    `)
  }
}

updateTable()
