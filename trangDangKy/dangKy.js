document.addEventListener('DOMContentLoaded', function () {
    // Khởi tạo các elements
    initializeElements();

    // Khởi tạo các event listeners
    initializeEventListeners();
});

function initializeElements() {
    // Form elements
    window.registerForm = document.getElementById('registerForm');
    window.passwordInputs = document.querySelectorAll('.password-input input');
    window.togglePasswordButtons = document.querySelectorAll('.toggle-password');

    // Social login buttons
    window.facebookBtn = document.querySelector('.facebook-btn');
    window.googleBtn = document.querySelector('.google-btn');
}

function initializeEventListeners() {
    // Password visibility toggle
    window.togglePasswordButtons.forEach((button, index) => {
        button.addEventListener('click', () => togglePasswordVisibility(window.passwordInputs[index], button));
    });

    // Form submission
    window.registerForm.addEventListener('submit', handleFormSubmit);

    // Social login
    window.facebookBtn.addEventListener('click', () => handleSocialLogin('Facebook'));
    window.googleBtn.addEventListener('click', () => handleSocialLogin('Google'));
}

function togglePasswordVisibility(input, button) {
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    button.classList.toggle('fa-eye', !isPassword);
    button.classList.toggle('fa-eye-slash', isPassword);
}

async function handleFormSubmit(e) {
    e.preventDefault();

    const formData = {
        fullname: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value,
        terms: document.getElementById('terms').checked
    };

    if (validateForm(formData)) {
        await submitForm(formData);
    }
}

function validateForm(data) {
    const { fullname, email, password, confirmPassword, terms } = data;

    // Validate fullname
    if (fullname.trim().length < 2) {
        showError('Họ tên phải có ít nhất 2 ký tự');
        return false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('Email không hợp lệ');
        return false;
    }

    // Validate password
    if (password.length < 6) {
        showError('Mật khẩu phải có ít nhất 6 ký tự');
        return false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        showError('Mật khẩu xác nhận không khớp');
        return false;
    }

    // Validate terms
    if (!terms) {
        showError('Vui lòng đồng ý với điều khoản sử dụng');
        return false;
    }

    return true;
}

async function submitForm(formData) {
    try {
        const response = await fetch('YOUR_API_URL/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullname: formData.fullname,
                email: formData.email,
                password: formData.password
            })
        });

        if (response.ok) {
            showSuccess('Đăng ký thành công!');
            window.location.href = '/login';
        } else {
            const data = await response.json();
            showError(data.message || 'Đăng ký thất bại. Vui lòng thử lại!');
        }
    } catch (error) {
        console.error('Error:', error);
        showError('Có lỗi xảy ra. Vui lòng thử lại sau!');
    }
}

function handleSocialLogin(provider) {
    showError(`Tính năng đăng ký bằng ${provider} đang được phát triển`);
}

function showError(message) {
    alert(message); // Có thể thay thế bằng UI toast hoặc modal
}

function showSuccess(message) {
    alert(message); // Có thể thay thế bằng UI toast hoặc modal
}