// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
    // Biến lấy số lượng sản phẩm và tổng giá
    const quantityInput = document.querySelector('#quantity'); // Nếu cần input số lượng
    const totalElement = document.querySelector('.total');
    const pricePerProduct = 560000; // Giá sản phẩm cố định (560,000 VND)
    const submitButton = document.querySelector('.button');

    // Kiểm tra số lượng sản phẩm và cập nhật tổng cộng
    if (quantityInput) {
        quantityInput.addEventListener('input', function () {
            const quantity = parseInt(quantityInput.value) || 1; // Lấy giá trị hoặc mặc định là 1
            const total = pricePerProduct * quantity; // Tính tổng
            totalElement.textContent = `Tổng cộng: ${total.toLocaleString('vi-VN')} VND`; // Hiển thị tổng bằng định dạng tiền tệ
        });
    }

    // Kiểm tra form trước khi submit
    submitButton.addEventListener('click', function (e) {
        e.preventDefault(); // Ngăn chặn hành động mặc định (submit)

        const name = document.querySelector('#name-cus').value.trim();
        const address = document.querySelector('#address').value.trim();
        const phone = document.querySelector('#phone-number').value.trim();
        const email = document.querySelector('#email').value.trim();

        // Biến cờ kiểm tra lỗi
        let errorMessage = '';

        // Kiểm tra các trường
        if (!name) {
            errorMessage += 'Vui lòng nhập tên người nhận.\n';
        }
        if (!address) {
            errorMessage += 'Vui lòng nhập địa chỉ.\n';
        }
        if (!phone.match(/^\d{10,11}$/)) {
            errorMessage += 'Số điện thoại phải có 10-11 chữ số.\n';
        }
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            errorMessage += 'Email không hợp lệ.\n';
        }

        // Nếu có lỗi, hiển thị thông báo
        if (errorMessage) {
            alert(errorMessage);
        } else {
            // Nếu không có lỗi, xử lý thanh toán (giả sử)
            alert('Thanh toán thành công! Cảm ơn bạn đã mua hàng.');
            // Có thể thêm hành động gửi thông tin về server tại đây
        }
    });
});
