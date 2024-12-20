// main.js

// Shop Now 按钮的跳转功能（如果你需要其他功能的话，可以在此添加）
document.querySelectorAll('.btn').forEach(function(button) {
    button.addEventListener('click', function() {
        // 跳转到商店页面
        window.location.href = 'shop.html';
    });
});
