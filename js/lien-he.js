document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formContact');
    const nameInput = form.querySelector('input[name="nameUser"]');
    const emailInput = form.querySelector('input[name="email"]');
    const phoneInput = form.querySelector('input[name="phoneNumber"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !phone || !message) {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert('Email không hợp lệ!');
            return;
        }

        const phonePattern = /^(?:\+84|0)(?:\d{9,10})$/;
        if (!phonePattern.test(phone)) {
            alert('Vui lòng nhập số điện thoại hợp lệ');
            return;
        }

        alert('Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi sớm nhất!');
        form.reset();
    });
});