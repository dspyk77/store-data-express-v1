
var output = document.querySelector("#output")

async function getUsers() {
  var response = await fetch("/api/users", { method: "GET" })
  var users = await response.json()

	console.log(users)
	console.log(users[0])
	console.log(users[1])
	console.log(users[0]["firstName"])
	console.log(users[1]["firstName"])

	output.innerHTML = JSON.stringify(users)
}
