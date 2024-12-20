<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Details | Tea Sage 茶夫子</title>
    <link rel="stylesheet" href="style.css">
    <script src="product-detail.js" defer></script>
</head>
<body>
    <header>
        <!-- Navbar -->
        <div class="navbar">
            <div class="navbar-logo">
                <a href="index.html">Tea Sage 茶夫子</a>
            </div>
            <ul class="navbar-links">
                <li><a href="index.html">Home / 首页</a></li>
                <li><a href="about.html">About / 关于</a></li>
                <li><a href="shop.html">Products / 产品</a></li>
                <li><a href="contact.html">Contact / 联系我们</a></li>
            </ul>
        </div>
    </header>

    <!-- Product Details Section -->
    <section class="product-details">
        <div class="container">
            <div class="product-wrapper">
                <!-- Product Image -->
                <div class="product-image">
                    <img id="product-image" src="images/default-product.jpg" alt="Product Image">
                </div>

                <!-- Product Info -->
                <div class="product-info">
                    <h1 id="product-name">Product Name</h1>
                    <p id="product-description">This is a placeholder description for the product. Detailed information will appear here.</p>
                    <p class="price" id="product-price">$0.00</p>

                    <!-- Add to Cart Button -->
                    <button id="add-to-cart" class="btn">Add to Cart</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Tea Sage 茶夫子. All rights reserved. / 版权所有。</p>
    </footer>
</body>
</html>
