
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
