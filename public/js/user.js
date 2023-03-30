
var output = document.querySelector("#output")

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

  var response = await fetch("/api/product/1", { method: "GET" })
  var product= await response.json()

	console.log(product)
	console.log(product["name"])
	console.log(product["category"])

	output.innerHTML = JSON.stringify(product)
}
