// Fetch and display products dynamically on the shop page
fetch('products.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load products.json');
        }
        return response.json();
    })
    .then(products => {
        const productGrid = document.getElementById('product-grid');
        
        // Loop through the products and create the HTML content for each
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price} Yuan / ${product.price}元</p>
                <a href="product.html?id=${product.id}" class="btn">Buy Now / 立即购买</a>
            `;

            productGrid.appendChild(productCard);
        });
    })
    .catch(error => {
        console.error('Error loading products:', error);
        document.getElementById('product-grid').innerHTML = '<p>Error loading products.</p>';
    });
