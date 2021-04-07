console.log("Show cart number js file loaded");

const DOMCartNumber = document.querySelector(".cart-items");
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

DOMCartNumber.textContent = cartItems.length > 0 ? cartItems.length : `0 items`;
