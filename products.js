const products = [
  {
    id: "1",
    name: "茶饼 Tea Cake",
    description: "陈年茶饼 泡茶送礼最佳选择 Premium tea cake with an authentic aged flavor.",
    price: 79,
    image: "images/product1.jpg"
  },
  {
    id: "2",
    name: "男性调理茶包 Men's Health Tea",
    description: "调理肾虚 补气血 让你充满活力 Supports kidney health and improves energy.",
    price: 59,
    image: "images/product2.jpg"
  },
  {
    id: "3",
    name: "健康调理茶包 Healthy Teabag",
    description: "针对你的症状，每日一茶包，20天见效 For small tea bag a day and make you refresh your body in 20 days.",
    price: 49,
    image: "images/product3.jpg"
  },
  {
    id: "4",
    name: "女生月经调理 Women's Menstrual Care Tea",
    description: "帮助调节月经周期，缓解不适感，呵护女性健康 Supports menstrual cycle regulation and alleviates discomfort, promoting women's health.",
    price: 59,
    image: "images/product4.jpg"
  },
  {
    id: "5",
    name: "祛湿茶调理脾胃 Dampness-Relieving Tea",
    description: "有效祛湿，调理脾胃，适合男女 Helps reduce dampness and supports spleen and stomach health. Suitable for both men and women.",
    price: 49,
    image: "images/product5.jpg"
  },
  {
    id: "6",
    name: "送礼茶叶 Gift Tea Set",
    description: "高品质茶叶，附送精美茶具，送礼佳选 Premium quality tea with elegant teaware included, perfect for gifting.",
    price: 149,
    image: "images/product6.jpg"
  }
];

const phoneNumber = "601168786888"; // 替换为你的 WhatsApp 号码

// Function to generate product cards with WhatsApp links
document.addEventListener("DOMContentLoaded", () => {
  const productList = document.querySelector(".product-list");

  products.forEach(product => {
    // Create the WhatsApp link
    const whatsappLink = `https://wa.me/${601168786888}?text=你好，我想购买 Hi would like to buy ${encodeURIComponent(product.name)} (%20${encodeURIComponent(product.description)}%20价格:${product.price}元)。`;

    // Create product card HTML
    const productCard = `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" class="product-image" />
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>价格: ${product.price}元</p>
        <a href="${whatsappLink}" class="buy-now" target="_blank">Buy Now</a>
      </div>
    `;

    // Append product card to the product list
    productList.innerHTML += productCard;
  });
});

// Export the products array for use in other files
export default products;
