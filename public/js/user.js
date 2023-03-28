
var output = document.querySelector("#output")

async function getUser() {
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

  var response = await fetch("/api/user/1", { method: "GET" })
  var user = await response.json()

	console.log(user)
	console.log(user["firstName"])
	console.log(user["lastName"])

	output.innerHTML = JSON.stringify(user)
}
