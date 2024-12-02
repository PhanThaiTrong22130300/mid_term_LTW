// Constants
const VALIDATION_MESSAGES = {
    required: 'Vui lòng điền thông tin này',
    email: 'Vui lòng nhập email hợp lệ',
    code: 'Vui lòng nhập đủ 6 số',
    password: {
        required: 'Vui lòng nhập mật khẩu',
        invalid: 'Mật khẩu phải có ít nhất 8 ký tự',
        mismatch: 'Mật khẩu không khớp'
    }
};

// Thêm hàm validate riêng cho từng loại input
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
        return VALIDATION_MESSAGES.required;
    }
    if (!emailRegex.test(email)) {
        return VALIDATION_MESSAGES.email;
    }
    return '';
}

function validateVerificationCode(code) {
    if (code.length !== 6) {
        return VALIDATION_MESSAGES.code;
    }
    return '';
}

function validatePassword(password, confirmPassword) {
    if (!password) {
        return VALIDATION_MESSAGES.password.required;
    }
    const passwordRegex = /.{8,}$/; // Mật khẩu phải có ít nhất 8 ký tự
    if (!passwordRegex.test(password)) {
        return VALIDATION_MESSAGES.password.invalid;
    }
    if (confirmPassword !== undefined && password !== confirmPassword) {
        return VALIDATION_MESSAGES.password.mismatch;
    }
    return '';
}

// Xử lý chuyển bước
function showStep(stepNumber) {
    document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));
    document.querySelectorAll('.step-circle').forEach(circle => circle.classList.remove('active'));

    document.getElementById(`step${stepNumber}`).classList.add('active');
    document.querySelector(`.step-circle[data-step="${stepNumber}"]`).classList.add('active');
}

// Xử lý form email
document.getElementById('emailForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
        showError('email', VALIDATION_MESSAGES.required);
        return;
    } else if (!emailRegex.test(email)) {
        showError('email', VALIDATION_MESSAGES.email);
        return;
    }

    showStep(2);
});

// Xử lý nhập mã xác nhận
const verificationInputs = document.querySelectorAll('.verification-code input');
verificationInputs.forEach((input, index) => {
    input.addEventListener('input', function () {
        if (this.value.length === 1) {
            if (index < verificationInputs.length - 1) {
                verificationInputs[index + 1].focus();
            }
        }
    });

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Backspace' && !this.value && index > 0) {
            verificationInputs[index - 1].focus();
        }
    });
});

// Xử lý form mã xác nhận
document.getElementById('verificationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let code = '';
    verificationInputs.forEach(input => code += input.value);

    if (code.length !== 6) {
        showError('codeError', VALIDATION_MESSAGES.code);
        return;
    }

    showStep(3);
});

// Xử lý form mật khẩu mới
document.getElementById('newPasswordForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!newPassword) {
        showError('newPassword', VALIDATION_MESSAGES.password.required);
        return;
    }

    const passwordRegex = /.{8,}$/; // Mật khẩu phải có ít nhất 8 ký tự
    if (!passwordRegex.test(newPassword)) {
        showError('newPassword', VALIDATION_MESSAGES.password.invalid);
        return;
    }

    if (newPassword !== confirmPassword) {
        showError('confirmPassword', VALIDATION_MESSAGES.password.mismatch);
        return;
    }

    alert('Đổi mật khẩu thành công!');
    window.location.href = '../html/dangNhap.html';
});

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

// Xử lý hiện/ẩn mật khẩu
document.querySelectorAll('.toggle-password').forEach(toggle => {
    toggle.addEventListener('click', function () {
        const input = this.previousElementSibling;
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
});




// Xử lý nút quay lại trang đăng nhập
document.querySelector('.back-to-login').addEventListener('click', function (e) {
    e.preventDefault();
    const isConfirmed = confirm('Bạn có chắc muốn quay lại trang đăng nhập? Các thông tin đã nhập sẽ không được lưu.');

    if (isConfirmed) {
        window.location.href = '../html/dangNhap.html';
    }
});



// Xử lý validation cho các input
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('invalid', (e) => {
        e.preventDefault();
        let errorMessage = VALIDATION_MESSAGES.required;

        if (input.type === 'email') {
            errorMessage = validateEmail(input.value);
        } else if (input.closest('.verification-code')) {
            errorMessage = validateVerificationCode(input.value);
        } else if (input.type === 'password') {
            const confirmPassword = input.id === 'confirmPassword' ?
                document.getElementById('newPassword').value : undefined;
            errorMessage = validatePassword(input.value, confirmPassword);
        }

        if (errorMessage) {
            showError(input.id || 'codeError', errorMessage);
        }
    });
});