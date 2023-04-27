
let output = document.querySelector("#output")

async function getProduct() {
  /*
    NOTE: This is fetching User 1 every time, but you can
    add an input on the page and do the following:

    ```
      var idInput = document.querySelector("#id-input")
      var id = idInput.value
    ```

    Then use this URL: `/api/user/${id}` in the fetch
    request below
  */

  let response = await fetch("/api/product/${id}", { method: "GET" })
  let product= await response.json()

  // output.insertAdjacentHTML("beforeend", `
  //   <ul>
  //     <li>Name: Apple</li>
  //     <li>Category: Produce</li>
  //     <li>Price: $2.59</li>
  //      <li>Weight: 3oz</li>
  //   </ul>
  // `)

	console.log(product)
	console.log(product["name"])
	console.log(product["category"])

	output.innerHTML = JSON.stringify(product)
}

getProduct()