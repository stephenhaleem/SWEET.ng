let total = parseInt(localStorage.getItem("cartTotal")) || 0;
let deliveryCost = 0;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("checkout-total").textContent = `₦${total}`;
  updateTotalWithDelivery();
});

function updateTotalWithDelivery() {
  const location = document.getElementById("location").value;
  deliveryCost = getDeliveryCost(location);
  document.getElementById("delivery-cost").textContent = `₦${deliveryCost}`;
  document.getElementById("grand-total").textContent = `₦${
    total + deliveryCost
  }`;
}

function getDeliveryCost(location) {
  if (location === "lagos") return 1000;
  if (location === "abuja") return 1500;
  return 2000; // Default delivery fee
}

function proceedToPayment() {
  alert(`Proceeding to payment. Grand Total: ₦${total + deliveryCost}`);
  // Implement payment logic here
}
