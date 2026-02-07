let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

function filterProducts(category) {
  let products = document.querySelectorAll(".product");

  products.forEach(product => {
    if (category === "all") {
      product.style.display = "block";
    } else {
      product.style.display = product.classList.contains(category)
        ? "block"
        : "none";
    }
  });
}

function toggleMenu() {
  let nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}
