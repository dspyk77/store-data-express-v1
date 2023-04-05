const addItem = document.querySelector("#add-item-btn");

addItem.addEventListener("click", () => {
	// open the redirected page in a new tab
	window.open("./users.html", "_blank");
	console.log("I heard the addItem btn clicked!")
});

async function getProducts() {
  var response = await fetch("/api/products", { method: "GET" });
  var products = await response.json();

	console.log(products);
	console.log(products[0]);
	console.log(products[1]);
	console.log(products[0]["name"]);
	console.log(products[1]["name"]);

	output.innerHTML = JSON.stringify(products);
}
