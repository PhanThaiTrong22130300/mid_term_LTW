// Hàm tính toán tổng giá giỏ hàng và tổng giá của từng sản phẩm
function updateTotalPrice() {
    const rows = document.querySelectorAll('.shopping-cart table tr');
    let totalPrice = 0; // Biến lưu tổng giá giỏ hàng

    rows.forEach(row => {
        const quantityInput = row.querySelector('input[type="number"]');
        const priceCell = row.querySelector('td:nth-child(4)');
        const totalPriceCell = row.querySelector('.product-total-price');

        if (quantityInput && priceCell && totalPriceCell) {
            const priceText = priceCell.textContent.replace('đ', '').replace('.', '').replace(',', '');
            const price = parseFloat(priceText);
            const quantity = parseInt(quantityInput.value);

            if (!isNaN(price) && !isNaN(quantity)) {
                const productTotal = price * quantity;
                totalPrice += productTotal;
                totalPriceCell.textContent = productTotal.toLocaleString('vi-VN') + 'đ';
            }
        }
    });

    const totalPriceElement = document.getElementById('total-price');
    if (totalPriceElement) {
        totalPriceElement.textContent = totalPrice.toLocaleString('vi-VN') + 'đ';
    }
}

// Thêm sự kiện cho nút xóa
function addDeleteEventListeners() {
    const deleteButtons = document.querySelectorAll('.delete-btn');

    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = button.closest('tr'); // Lấy dòng sản phẩm (tr) chứa nút xóa
            row.remove(); // Xóa dòng sản phẩm khỏi bảng
            updateTotalPrice(); // Cập nhật lại tổng giỏ hàng
        });
    });
}

// Lắng nghe sự kiện thay đổi số lượng sản phẩm
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', updateTotalPrice);
});

window.addEventListener('load', function() {
    updateTotalPrice();
    addDeleteEventListeners(); // Thêm sự kiện xóa khi trang tải xong
});

document.addEventListener("DOMContentLoaded", function () {
    const paymentMethods = document.getElementsByName("payment");
    const bankDetails = document.getElementById("bank-details");
    const button = document.querySelector(".button");

    const productPrice = 560000;  // Giá sản phẩm (ví dụ 560,000 VND)

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

    // Xử lý hiển thị thông tin chuyển khoản khi chọn phương thức thanh toán
    function toggleBankDetails() {
        const selectedPayment = document.querySelector('input[name="payment"]:checked').value;

        if (selectedPayment === "bank") {
            bankDetails.style.display = "block"; // Hiển thị thông tin chuyển khoản nếu chọn chuyển khoản ngân hàng
        } else {
            bankDetails.style.display = "none"; // Ẩn nếu chọn thanh toán khi nhận hàng
        }
    }

    // Lắng nghe sự thay đổi phương thức thanh toán
    paymentMethods.forEach((method) => {
        method.addEventListener("change", toggleBankDetails);
    });

    // Xử lý sự kiện khi nhấn nút thanh toán
    button.addEventListener("click", function () {
        console.log("Nút thanh toán được nhấn");  // Kiểm tra xem sự kiện có được kích hoạt không

        const selectedMethod = Array.from(paymentMethods).find((method) => method.checked).value;  // Phương thức thanh toán đã chọn

        // Lấy thông tin khách hàng
        const name = document.querySelector("#name-cus").value.trim();
        const address = document.querySelector("#address").value.trim();
        const phone = document.querySelector("#phone-number").value.trim();
        const email = document.querySelector("#email").value.trim();

        // Kiểm tra các trường thông tin giao hàng
        if (!name || !address || !phone || !email) {
            alert('Vui lòng điền đầy đủ thông tin giao hàng!');
            return;
        }

        // Kiểm tra định dạng số điện thoại
        if (!validatePhoneNumber(phone)) {
            alert('Vui lòng nhập số điện thoại hợp lệ!');
            return;
        }

        // Kiểm tra định dạng email
        if (!validateEmail(email)) {
            alert('Vui lòng nhập email hợp lệ!');
            return;
        }

        // Hiển thị thông báo cho phương thức thanh toán đã chọn
        if (selectedMethod === "bank") {
            alert(
                `Bạn đã chọn thanh toán qua chuyển khoản. Vui lòng chuyển khoản theo thông tin đã hiển thị.`
            );
        } else {
            alert(`Đặt hàng thành công! Vui lòng chuẩn bị tiền trước!`);
        }
    });

    toggleBankDetails();  // Hiển thị/ẩn thông tin chuyển khoản nếu cần
});
