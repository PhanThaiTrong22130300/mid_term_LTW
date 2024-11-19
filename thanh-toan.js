document.addEventListener("DOMContentLoaded", function () {
    const paymentMethods = document.getElementsByName("payment");
    const bankDetails = document.getElementById("bank-details");
    const quantityInput = document.querySelector("#quantity");
    const totalElement = document.querySelector(".total");
    const button = document.querySelector(".button");

    const productPrice = 560000; 

    function updateTotal() {
        const quantity = parseInt(quantityInput.value) || 1;
        const total = productPrice * quantity;
        totalElement.textContent = `Tổng cộng: ${total.toLocaleString('vi-VN')} VND`;
    }

    // Kiểm tra định dạng số điện thoại
    function validatePhoneNumber(phone) {
        const phonePattern = /^(?:\+84|0)(?:\d{9,10})$/;
        return phonePattern.test(phone);
    }

    // Kiểm tra định dạng email
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    // Xử lý hiển thị thông tin chuyển khoản
    function toggleBankDetails() {
        const selectedPayment = document.querySelector('input[name="payment"]:checked').value;

        if (selectedPayment === "bank") {
            bankDetails.style.display = "block"; // Hiển thị nếu chọn chuyển khoản
        } else {
            bankDetails.style.display = "none"; // Ẩn nếu chọn thanh toán khi nhận hàng
        }
    }

    // Xử lý sự kiện thay đổi phương thức thanh toán
    paymentMethods.forEach((method) => {
        method.addEventListener("change", toggleBankDetails);
    });

    // Xử lý khi số lượng thay đổi
    quantityInput.addEventListener("input", updateTotal);

    // Xử lý khi nhấn nút thanh toán
    button.addEventListener("click", function () {
        const quantity = parseInt(quantityInput.value) || 1;
        const selectedMethod = Array.from(paymentMethods).find((method) => method.checked).value;

        const name = document.querySelector("#name-cus").value.trim();
        const address = document.querySelector("#address").value.trim();
        const phone = document.querySelector("#phone-number").value.trim();
        const email = document.querySelector("#email").value.trim();

        // Kiểm tra các trường thông tin người nhận
        if (!name || !address || !phone || !email) {
            alert('Vui lòng điền đầy đủ thông tin giao hàng!');
            return;
        }

        // Kiểm tra định dạng số điện thoại
        if (!validatePhoneNumber(phone)) {
            alert('Vui lòng nhập số điện thoại hợp lệ');
            return;
        }

        // Kiểm tra định dạng email
        if (!validateEmail(email)) {
            alert('Vui lòng nhập email hợp lệ!');
            return;
        }

        if (selectedMethod === "bank") {
            alert(
                `Bạn đã chọn thanh toán qua chuyển khoản. Vui lòng chuyển khoản ${productPrice * quantity} VND theo thông tin đã hiển thị.`
            );
        } else {
            alert(`Thanh toán thành công khi nhận hàng! Tổng cộng là ${productPrice * quantity} VND.`);
        }
    });

    updateTotal();
    toggleBankDetails();
});
