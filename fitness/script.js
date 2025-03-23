// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const placeOrderButton = document.getElementById("place-order");
    const cart = [];

    function updateCart() {
        cartCount.textContent = cart.length;
        cartItems.innerHTML = cart
            .map(item => `<li>${item.name} - $${item.price}</li>`)
            .join("");
        placeOrderButton.disabled = cart.length === 0;
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            const price = button.getAttribute("data-price");
            cart.push({ name, price });
            updateCart();
        });
    });

    placeOrderButton.addEventListener("click", () => {
        alert("Order placed successfully!");
        cart.length = 0; // Clear the cart
        updateCart();
    });
});
