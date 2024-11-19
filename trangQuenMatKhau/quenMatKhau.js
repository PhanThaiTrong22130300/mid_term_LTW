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