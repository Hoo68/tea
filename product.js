// Get the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Fetch product data from the JSON file
fetch('products.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load products.json");
        }
        return response.json();
    })
    .then(products => {
        // Find the product with the matching ID
        const product = products.find(p => p.id === productId);
        if (product) {
            // Dynamically update the product details on the page
            const productDetails = `
                <div class="product-detail">
                    <img src="${product.image}" alt="${product.name}">
                    <h1>${product.name}</h1>
                    <p>${product.description}</p>
                    <p><strong>Price: ${product.price} Yuan</strong></p>
                    <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
                </div>
            `;
            document.getElementById('product-details').innerHTML = productDetails;
        } else {
            // Show an error if the product isn't found
            document.getElementById('product-details').innerHTML = '<p>Product not found.</p>';
        }
    })
    .catch(error => {
        console.error("Error loading product details:", error);
        document.getElementById('product-details').innerHTML = '<p>Error loading product details.</p>';
    });

// Add the product to the cart
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} has been added to your cart.`);
}
