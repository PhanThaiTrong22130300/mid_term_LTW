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