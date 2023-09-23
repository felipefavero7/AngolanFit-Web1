const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

let total = 0;

addToCartButtons.forEach(button => {
    button.addEventListener("click", function() {
        const product = button.parentElement;
        const productName = product.querySelector("h2").textContent;
        const productPrice = parseFloat(product.querySelector("p").textContent.replace("R$ ", ""));
        
        const cartItem = document.createElement("li");
        cartItem.textContent = `${productName} - R$ ${productPrice.toFixed(2)}`;
        
        cartItemsList.appendChild(cartItem);
        
        total += productPrice;
        cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
    });
});
