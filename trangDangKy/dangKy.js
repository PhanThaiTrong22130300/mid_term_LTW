// Constants
const VALIDATION_MESSAGES = {
    required: 'Vui lòng điền thông tin này',
    email: 'Vui lòng nhập email hợp lệ',
    password: 'Mật khẩu phải có ít nhất 6 ký tự',
    confirmPassword: 'Mật khẩu xác nhận không khớp',
    terms: 'Vui lòng đồng ý với điều khoản sử dụng'
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeElements();
    initializeEventListeners();
});

// Element Initialization
function initializeElements() {
    // Cache DOM elements
    window.elements = {
        form: document.getElementById('registerForm'),
        inputs: {
            fullname: document.getElementById('fullname'),
            email: document.getElementById('email'),
            password: document.getElementById('password'),
            confirmPassword: document.getElementById('confirmPassword'),
            terms: document.getElementById('terms')
        },
        passwordToggles: document.querySelectorAll('.toggle-password'),
        socialButtons: {
            facebook: document.querySelector('.facebook-btn'),
            google: document.querySelector('.google-btn')
        }
    };

    // Setup form validation
    setupFormValidation();
}

// Event Listeners
function initializeEventListeners() {
    const { form, passwordToggles, socialButtons } = window.elements;

    // Form submission
    form.addEventListener('submit', handleFormSubmit);

    // Password visibility
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', handlePasswordToggle);
    });

    // Social login
    socialButtons.facebook.addEventListener('click', () => handleSocialLogin('Facebook'));
    socialButtons.google.addEventListener('click', () => handleSocialLogin('Google'));

    // Xử lý nút đăng nhập ở header
    document.querySelector('.auth-links a[href="#"]').addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = '../trangDangNhap/dangNhap.html';
    });

    // Xử lý link đăng nhập ngay
    document.querySelector('.login-link a').addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = '../trangDangNhap/dangNhap.html';
    });
}

// Form Handling
async function handleFormSubmit(e) {
    e.preventDefault();
    const formData = getFormData();

    if (validateForm(formData)) {
        await submitForm(formData);
    }
}

// Utility Functions
function showNotification(message, type = 'error') {
    // Implement your notification system here
    alert(message);
}