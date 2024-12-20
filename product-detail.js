// product-detail.js

document.addEventListener("DOMContentLoaded", () => {
    // Fetch the query string from the URL (e.g., ?id=123)
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (!productId) {
        displayError("Product not found. Please return to the shop.");
        return;
    }

    // Example product data (Replace with an actual API or database call)
    const products = [
        {
            id: "1",
            name: "Tea Cake - Lao Ban Zhang",
            price: "69 CNY",
            description: "A premium aged tea cake, sourced from the finest tea gardens.",
            image: "images/tea-cake-lao-ban-zhang.jpg",
        },
        {
            id: "2",
            name: "Men's Health Tea",
            price: "49 CNY",
            description: "Specially formulated tea for kidney nourishment and overall health.",
            image: "images/mens-health-tea.jpg",
        },
        {
            id: "3",
            name: "Dampness-Relief Tea",
            price: "39 CNY",
            description: "A herbal blend to support digestion and reduce internal dampness.",
            image: "images/dampness-relief-tea.jpg",
        },
    ];

    // Find the product by ID
    const product = products.find((item) => item.id === productId);

    if (!product) {
        displayError("Product not found. Please return to the shop.");
        return;
    }

    // Populate the product details on the page
    populateProductDetails(product);
});

/**
 * Populate product details on the page.
 * @param {Object} product - The product object containing details.
 */
function populateProductDetails(product) {
    // Select elements by their IDs
    const productImage = document.getElementById("product-image");
    const productName = document.getElementById("product-name");
    const productPrice = document.getElementById("product-price");
    const productDescription = document.getElementById("product-description");

    // Check if elements exist
    if (!productImage || !productName || !productPrice || !productDescription) {
        console.error("Some DOM elements are missing. Check your HTML structure.");
        return;
    }

    // Populate the elements with product data
    productImage.src = product.image || "images/placeholder.png"; // Fallback image
    productImage.alt = product.name || "Product Image";
    productName.textContent = product.name || "Product Name Not Available";
    productPrice.textContent = product.price || "Price Not Available";
    productDescription.textContent = product.description || "Description Not Available";

    // Update the page title dynamically
    document.title = product.name ? `${product.name} | Tea Sage 茶夫子` : "Product Details";
}

/**
 * Display an error message if the product is not found.
 * @param {string} message - The error message to display.
 */
function displayError(message) {
    const container = document.getElementById("product-detail-container");
    if (!container) {
        console.error("Product detail container element is missing.");
        return;
    }

    container.innerHTML = `
        <p class='error-message'>${message}</p>
        <a href="shop.html" class="btn-back">Back to Shop</a>
    `;
    container.style.textAlign = "center";
    container.style.padding = "20px";
    container.style.color = "red";
}
