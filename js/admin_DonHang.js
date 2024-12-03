document.addEventListener('DOMContentLoaded', () => {
    loadOrders();
    const links = document.querySelectorAll('.sidebar nav a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            // Ngăn chặn hành vi mặc định của liên kết
            event.preventDefault();

            // Remove active class from all links
            links.forEach(l => l.classList.remove('active'));
            // Add active class to the clicked link
            this.classList.add('active');

            // Điều hướng đến trang tương ứng
            const section = this.getAttribute('data-section');
            navigateToSection(section);
        });
    });
});

function navigateToSection(section) {
    switch (section) {
        case 'dashboard':
            window.location.href = '../html/admin.html';
            break;
        case 'products':
            window.location.href = '../html/admin_SanPham.html';
            break;
        case 'users':
            window.location.href = '../html/admin_NguoiDung.html';
            break;
        case 'orders':
            window.location.href = '../html/admin_DonHang.html';
            break;
        case 'revenue':
            window.location.href = '../html/admin_DoanhThu.html';
            break;
        default:
            break;
    }
}

let orders = []; // Biến toàn cục để lưu trữ đơn hàng

function loadOrders() {
    // Simulate loading orders
    orders = [
        { orderId: '001', productName: 'Ví da nam', quantity: 2, price: '1.000.000đ', status: 'Đã giao' },
        { orderId: '002', productName: 'Ví da nữ', quantity: 1, price: '600.000đ', status: 'Chưa giao' },
    ];
    displayOrders();
}

function displayOrders() {
    const tableBody = document.getElementById('orders-table-body');
    tableBody.innerHTML = ''; // Xóa nội dung cũ
    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.orderId}</td>
            <td>${order.productName}</td>
            <td>${order.quantity}</td>
            <td>${order.price}</td>
            <td>${order.status}</td>
            <td><button onclick="deleteOrder('${order.orderId}')">Xóa</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteOrder(orderId) {
    if (confirm('Bạn có chắc chắn muốn xóa đơn hàng này?')) {
        orders = orders.filter(order => order.orderId !== orderId); // Xóa đơn hàng
        displayOrders(); // Cập nhật bảng đơn hàng
    }
}