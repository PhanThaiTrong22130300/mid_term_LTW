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

    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('emailError').textContent = 'Email không hợp lệ';
        return;
    }

    // Giả lập gửi mã xác nhận
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

document.getElementById('verificationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let code = '';
    verificationInputs.forEach(input => code += input.value);

    if (code.length !== 6) {
        document.getElementById('codeError').style.display = 'block';
        document.getElementById('codeError').textContent = 'Vui lòng nhập đủ 6 số';
        return;
    }

    showStep(3);
});
// Xử lý đổi mật khẩu
document.getElementById('newPasswordForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordError = document.getElementById('passwordError');

    if (newPassword !== confirmPassword) {
        passwordError.style.display = 'block';
        passwordError.textContent = 'Mật khẩu không khớp';
        return;
    }

    // Kiểm tra yêu cầu mật khẩu
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
        passwordError.style.display = 'block';
        passwordError.textContent = 'Mật khẩu không đáp ứng yêu cầu';
        return;
    }

    alert('Đổi mật khẩu thành công!');
    window.location.href = 'dangNhap.html';
});






// Xử lý nút quay lại trang đăng nhập
document.querySelector('.back-to-login').addEventListener('click', function (e) {
    e.preventDefault();
    const isConfirmed = confirm('Bạn có chắc muốn quay lại trang đăng nhập? Các thông tin đã nhập sẽ không được lưu.');

    if (isConfirmed) {
        window.location.href = '../trangDangNhap/dangNhap.html';
    }
});

// Xử lý phím ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const isConfirmed = confirm('Bạn có chắc muốn quay lại trang đăng nhập? Các thông tin đã nhập sẽ không được lưu.');

        if (isConfirmed) {
            window.location.href = '../trangDangNhap/dangNhap.html';
        }
    }
});