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
    const productImage = document.getElementById("product-image");
    const productName = document.getElementById("product-name");
    const productPrice = document.getElementById("product-price");
    const productDescription = document.getElementById("product-description");

    productImage.src = product.image;
    productImage.alt = product.name;
    productName.textContent = product.name;
    productPrice.textContent = product.price;
    productDescription.textContent = product.description;
}

/**
 * Display an error message if the product is not found.
 * @param {string} message - The error message to display.
 */
function displayError(message) {
    const container = document.getElementById("product-detail-container");
    container.innerHTML = `<p class='error-message'>${message}</p>`;
    container.style.textAlign = "center";
    container.style.padding = "20px";
    container.style.color = "red";
}
