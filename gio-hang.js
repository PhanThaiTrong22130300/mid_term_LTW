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

// Lắng nghe sự kiện thay đổi số lượng sản phẩm
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', updateTotalPrice);
});

window.addEventListener('load', function() {
    updateTotalPrice();
});