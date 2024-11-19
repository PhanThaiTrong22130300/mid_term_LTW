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

    // Navigation
    initializeNavigation();
}

// Navigation Handlers
function initializeNavigation() {
    // Header login button
    document.querySelector('.auth-links a[href="#"]')
        .addEventListener('click', navigateToLogin);

    // Login link
    document.querySelector('.login-link a')
        .addEventListener('click', navigateToLogin);
}

function navigateToLogin(e) {
    e.preventDefault();
    window.location.href = '../trangDangNhap/dangNhap.html';
}

// Form Handling
async function handleFormSubmit(e) {
    e.preventDefault();
    const formData = getFormData();

    if (validateForm(formData)) {
        await submitForm(formData);
    }
}

function handlePasswordToggle() {
    const input = this.previousElementSibling;
    const type = input.type === 'password' ? 'text' : 'password';
    input.type = type;

    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
}

function handleSocialLogin(platform) {
    alert(`Tính năng đăng nhập bằng ${platform} đang được phát triển!`);
}

// Form Utilities
function getFormData() {
    const { inputs } = window.elements;
    return {
        fullname: inputs.fullname.value,
        email: inputs.email.value,
        password: inputs.password.value,
        confirmPassword: inputs.confirmPassword.value,
        terms: inputs.terms.checked
    };
}

function validateForm(data) {
    // Add your validation logic here
    return true;
}

async function submitForm(data) {
    try {
        // Add your form submission logic here
        console.log('Form submitted:', data);
        window.location.href = '../trangDangNhap/dangNhap.html';
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}