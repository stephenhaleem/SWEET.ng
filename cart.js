let cart = [];

function toggleCart() {
  document.getElementById("cartSidebar").classList.toggle("active");
}

function addToCart(button) {
  let product = button.parentElement;
  let name = product.getAttribute("data-name");
  let price = parseInt(product.getAttribute("data-price"));

  let existingItem = cart.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  updateCart();
}

function updateCart() {
  let cartItemsContainer = document.getElementById("cart-items");
  let cartCount = document.getElementById("cart-count");
  let cartTotalPrice = document.getElementById("cart-total-price");

  cartItemsContainer.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((item, index) => {
    totalPrice += item.price * item.quantity;
    cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <p>${item.name} (₦${item.price}) x${item.quantity}</p>
                        <button class="quantity-btn"  onclick="decreaseQuantity(${index})">-</button>
        <span>${item.quantity}</span>
        <button class="quantity-btn"  onclick="increaseQuantity(${index})">+</button>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
  });

  cartCount.textContent = cart.length;
  cartTotalPrice.textContent = `₦${totalPrice}`;
}
function increaseQuantity(index) {
  cart[index].quantity++;
  updateCart();
}

function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    removeFromCart(index);
  }
  updateCart();
}
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  localStorage.setItem("cartTotal", total);
  window.location.href = "checkout.html";
}

function clearCart() {
  cart = [];
  updateCart();
}
