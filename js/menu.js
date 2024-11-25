// Lấy URL hiện tại của trang
const currentUrl = window.location.href;

// Duyệt qua tất cả các liên kết trong menu
document.querySelectorAll("nav ul li a").forEach((link) => {
    // Nếu URL của liên kết trùng với URL hiện tại
    if (link.href === currentUrl) {
        // Thêm class 'active' cho thẻ cha `<li>`
        link.parentElement.classList.add("active");
    }
});
