// Xử lý form đăng nhập
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Lấy giá trị input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('email', 'Email không hợp lệ');
        return;
    }

    // Validate password
    if (password.length < 6) {
        showError('password', 'Mật khẩu phải có ít nhất 6 ký tự');
        return;
    }

    // Giả lập đăng nhập thành công
    console.log('Đăng nhập với:', { email, password, remember });
    alert('Đăng nhập thành công!');
    window.location.href = '../trang-chu.html';
});
// Hiển thị lỗi
function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;

    // Xóa thông báo lỗi cũ nếu có
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Thêm thông báo lỗi mới
    input.parentElement.appendChild(errorDiv);
    input.classList.add('error');

    // Xóa thông báo lỗi khi focus vào input
    input.addEventListener('focus', function () {
        errorDiv.remove();
        input.classList.remove('error');
    });
}
