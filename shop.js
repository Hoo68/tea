// 替换为你的 WhatsApp 电话号码
const phoneNumber = "601168786888"; 

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

            // Generate the WhatsApp link with product details
            const whatsappLink = `https://wa.me/${phoneNumber}?text=你好，我想购买【${encodeURIComponent(product.name)}】 (%20${encodeURIComponent(product.description)}%20价格: ${product.price}元)。`;

            // Populate the product card
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price} Yuan / ${product.price}元</p>
                <a href="${whatsappLink}" class="btn" target="_blank">Buy Now / 立即购买</a>
            `;

            // Append the product card to the product grid
            productGrid.appendChild(productCard);
        });
    })
    .catch(error => {
        console.error('Error loading products:', error);
        document.getElementById('product-grid').innerHTML = '<p>Error loading products.</p>';
    });
