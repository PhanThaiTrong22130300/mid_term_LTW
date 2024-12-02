// Constants
const VALIDATION_MESSAGES = {
    required: 'Vui lòng điền thông tin này',
    email: 'Vui lòng nhập email hợp lệ',
    password: 'Mật khẩu phải có ít nhất 8 ký tự',
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
        }
    };
}

// Event Listeners
function initializeEventListeners() {
    const { form } = window.elements;

    // Form submission
    form.addEventListener('submit', handleFormSubmit);
}

// Form Handling
async function handleFormSubmit(e) {
    e.preventDefault();
    const formData = getFormData();

    if (validateForm(formData)) {
        await submitForm(formData);
    }
}

// Các hàm hỗ trợ form
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
    const errors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^.{8,}$/;

    // Kiểm tra họ và tên
    if (!data.fullname.trim()) {
        showError('fullname', VALIDATION_MESSAGES.required);
        errors.push('fullname');
    }

    // Kiểm tra email
    if (!data.email.trim()) {
        showError('email', VALIDATION_MESSAGES.required);
        errors.push('email');
    } else if (!emailRegex.test(data.email)) {
        showError('email', VALIDATION_MESSAGES.email);
        errors.push('email');
    }

    // Kiểm tra mật khẩu
    if (!data.password) {
        showError('password', VALIDATION_MESSAGES.required);
        errors.push('password');
    } else if (!passwordRegex.test(data.password)) {
        showError('password', 'Mật khẩu phải có ít nhất 8 ký tự');
        errors.push('password');
    }

    // Kiểm tra mật khẩu xác nhận
    if (!data.confirmPassword) {
        showError('confirmPassword', VALIDATION_MESSAGES.required);
        errors.push('confirmPassword');
    } else if (data.password !== data.confirmPassword) {
        showError('confirmPassword', VALIDATION_MESSAGES.confirmPassword);
        errors.push('confirmPassword');
    }

    // Kiểm tra điều khoản
    if (!data.terms) {
        showError('terms', VALIDATION_MESSAGES.terms);
        errors.push('terms');
    }

    return errors.length === 0;
}

function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const container = inputId === 'terms' ? input.closest('.checkbox-container') : input.parentElement;

    // Xóa thông báo lỗi cũ nếu có
    const existingError = container.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Tạo và thêm thông báo lỗi mới
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    container.appendChild(errorDiv);
    input.classList.add('error');
}

async function submitForm(data) {
    try {
        // Add your form submission logic here
        console.log('Form submitted:', data);
        window.location.href = '../html/dangNhap.html';
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}

