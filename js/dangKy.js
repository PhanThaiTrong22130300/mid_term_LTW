// Constants
const VALIDATION_MESSAGES = {
    required: 'Vui lòng điền thông tin này',
    email: 'Vui lòng nhập email hợp lệ',
    password: 'Mật khẩu phải có ít nhất 8 ký tự',
    confirmPassword: 'Mật khẩu xác nhận không khớp',
    terms: 'Vui lòng đồng ý với điều khoản sử dụng'
};

// DOM Elements
const elements = {
    form: document.getElementById('registerForm'),
    fullname: document.getElementById('fullname'),
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    confirmPassword: document.getElementById('confirmPassword'),
    terms: document.getElementById('terms'),
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    elements.form.addEventListener('submit', handleFormSubmit);
});

// Form Handling
async function handleFormSubmit(e) {
    e.preventDefault();
    clearErrors(); // Xóa lỗi trước khi kiểm tra mới
    const formData = getFormData();

    if (validateForm(formData)) {
        await submitForm(formData);
    }
}

// Get Form Data
function getFormData() {
    return {
        fullname: elements.fullname.value.trim(),
        email: elements.email.value.trim(),
        password: elements.password.value,
        confirmPassword: elements.confirmPassword.value,
        terms: elements.terms.checked
    };
}

// Validate Form
function validateForm(data) {
    const errors = [];

    // Validate Fullname
    if (!data.fullname) {
        showError(elements.fullname, VALIDATION_MESSAGES.required);
        errors.push('fullname');
    }

    // Validate Email
    if (!data.email) {
        showError(elements.email, VALIDATION_MESSAGES.required);
        errors.push('email');
    } else if (!isValidEmail(data.email)) {
        showError(elements.email, VALIDATION_MESSAGES.email);
        errors.push('email');
    }

    // Validate Password
    if (!data.password) {
        showError(elements.password, VALIDATION_MESSAGES.required);
        errors.push('password');
    } else if (data.password.length < 8) {
        showError(elements.password, VALIDATION_MESSAGES.password);
        errors.push('password');
    }

    // Validate Confirm Password
    if (data.password !== data.confirmPassword) {
        showError(elements.confirmPassword, VALIDATION_MESSAGES.confirmPassword);
        errors.push('confirmPassword');
    }

    // Validate Terms
    if (!data.terms) {
        showError(elements.terms, VALIDATION_MESSAGES.terms);
        errors.push('terms');
    }

    return errors.length === 0;
}

// Show Error
function showError(input, message) {
    const container = input.parentElement;
    const existingError = container.querySelector('.error-message');

    // Remove existing error if any
    if (existingError) {
        existingError.remove();
    }

    // Create and append new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    container.appendChild(errorDiv);
    input.classList.add('error');
}

// Clear Errors
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.classList.remove('error'));
}

// Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Submit Form
async function submitForm(data) {
    try {
        // Simulate form submission logic
        console.log('Form submitted:', data);
        // Redirect to login page
        window.location.href = '../html/dangNhap.html';
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}

