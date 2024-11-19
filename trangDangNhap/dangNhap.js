// Constants
const VALIDATION_MESSAGES = {
    required: 'Vui lòng điền thông tin này',
    email: 'Vui lòng nhập email hợp lệ',
    password: 'Mật khẩu phải có ít nhất 6 ký tự'
};

// Xử lý form đăng nhập
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Lấy giá trị input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
        showError('email', VALIDATION_MESSAGES.required);
        return;
    } else if (!emailRegex.test(email)) {
        showError('email', VALIDATION_MESSAGES.email);
        return;
    }

    // Validate password
    if (!password) {
        showError('password', VALIDATION_MESSAGES.required);
        return;
    } else if (password.length < 6) {
        showError('password', VALIDATION_MESSAGES.password);
        return;
    }

    // Lưu thông tin đăng nhập nếu được chọn
    if (remember) {
        saveLoginInfo(email, remember);
    }

    // Chuyển hướng đến trang chủ
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

// Xử lý nút quên mật khẩu
document.querySelector('.forgot-password').addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = '../trangQuenMatKhau/quenMatKhau.html';
});

// Xử lý đăng nhập với Facebook
document.querySelector('.facebook-btn').addEventListener('click', function () {
    // Thêm code xử lý đăng nhập Facebook ở đây
    alert('Tính năng đang được phát triển!');
});

// Xử lý đăng nhập với Google
document.querySelector('.google-btn').addEventListener('click', function () {
    // Thêm code xử lý đăng nhập Google ở đây
    alert('Tính năng đang được phát triển!');
});

// Lưu thông tin đăng nhập nếu chọn "Ghi nhớ đăng nhập"
function saveLoginInfo(email, remember) {
    if (remember) {
        localStorage.setItem('savedEmail', email);
    } else {
        localStorage.removeItem('savedEmail');
    }
}

// Khôi phục thông tin đăng nhập đã lưu
window.addEventListener('load', function () {
    const savedEmail = localStorage.getItem('savedEmail');
    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
        document.getElementById('remember').checked = true;
    }
});

// Xử lý chuyển trang đăng ký
document.querySelector('.auth-links a[href="../trangDangKy/dangKy.html"]').addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = '../trangDangKy/dangKy.html';
});

document.querySelector('.register-link a').addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = '../trangDangKy/dangKy.html';
});