
var backLink = document.querySelector("#back-link")

var firstNameInput = document.querySelector("#first-name")
var lastNameInput = document.querySelector("#last-name")
var ageInput = document.querySelector("#age")
var weightInput = document.querySelector("#weight")

var userId = getUserIdFromUrlQueryParam()

function updateBackLink() {
  backLink.href = `../user.html?id=${userId}`
}

async function updateInputs() {
  var apiUrl = `/users/${userId}`
  console.log(apiUrl)

  var response = await fetch(apiUrl, { method: "GET" })
  var user = await response.json()
  console.log(user)

  firstNameInput.value = user["firstName"]
  lastNameInput.value = user["lastName"]
  ageInput.value = user["age"]
  weightInput.value = user["weight"]
}

async function sendUpdateUserRequest() {
  var updatedUser = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    age: ageInput.value,
    weight: weightInput.value
  }

  var response = await fetch(`/users/${userId}`,
    {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUser)
    }
  )

  var user = await response.json()
  console.log(user)
}

updateBackLink()
updateInputs()
