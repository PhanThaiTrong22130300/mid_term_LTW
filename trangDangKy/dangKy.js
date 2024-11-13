document.addEventListener('DOMContentLoaded', function () {
    // Lấy form và các elements
    const registerForm = document.getElementById('registerForm');
    const passwordInputs = document.querySelectorAll('.password-input input');
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');

    // Xử lý hiện/ẩn mật khẩu
    togglePasswordButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            const input = passwordInputs[index];
            if (input.type === 'password') {
                input.type = 'text';
                button.classList.remove('fa-eye');
                button.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                button.classList.remove('fa-eye-slash');
                button.classList.add('fa-eye');
            }
        });
    });

    // Xử lý submit form
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Lấy giá trị từ form
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.getElementById('terms').checked;

        // Validate form
        if (!validateForm(fullname, email, password, confirmPassword, terms)) {
            return;
        }

        // Nếu validate thành công, gửi data
        const userData = {
            fullname,
            email,
            password
        };

        // Gửi data lên server (thay thế URL bằng API thực tế của bạn)
        submitForm(userData);
    });

    // Hàm validate form
    function validateForm(fullname, email, password, confirmPassword, terms) {
        // Validate họ tên
        if (fullname.trim().length < 2) {
            alert('Họ tên phải có ít nhất 2 ký tự');
            return false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Email không hợp lệ');
            return false;
        }

        // Validate mật khẩu
        if (password.length < 6) {
            alert('Mật khẩu phải có ít nhất 6 ký tự');
            return false;
        }

        // Kiểm tra mật khẩu xác nhận
        if (password !== confirmPassword) {
            alert('Mật khẩu xác nhận không khớp');
            return false;
        }

        // Kiểm tra điều khoản
        if (!terms) {
            alert('Vui lòng đồng ý với điều khoản sử dụng');
            return false;
        }

        return true;
    }

    // Hàm gửi form
    async function submitForm(userData) {
        try {
            // Thay thế URL này bằng API thực tế của bạn
            const response = await fetch('YOUR_API_URL/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                alert('Đăng ký thành công!');
                window.location.href = '/login'; // Chuyển hướng đến trang đăng nhập
            } else {
                const data = await response.json();
                alert(data.message || 'Đăng ký thất bại. Vui lòng thử lại!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Có lỗi xảy ra. Vui lòng thử lại sau!');
        }
    }

    // Xử lý đăng ký bằng mạng xã hội
    document.querySelector('.facebook-btn').addEventListener('click', function () {
        // Thêm code xử lý đăng ký bằng Facebook
        alert('Tính năng đăng ký bằng Facebook đang được phát triển');
    });

    document.querySelector('.google-btn').addEventListener('click', function () {
        // Thêm code xử lý đăng ký bằng Google
        alert('Tính năng đăng ký bằng Google đang được phát triển');
    });

    // Xử lý nút Trang chủ trong navigation
    const homeLink = document.querySelector('a[href="/"]');
    if (homeLink) {
        homeLink.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = 'trang-chu.html';
        });
    }

    // Xử lý logo/brand nếu có
    const brandLink = document.querySelector('.brand');
    if (brandLink) {
        brandLink.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = 'trang-chu.html';
        });
    }
});