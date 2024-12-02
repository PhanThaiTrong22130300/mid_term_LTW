document.addEventListener('DOMContentLoaded', () => {
    const orders = [
        { id: 1, customerName: 'Nguyễn Văn A', total: '500.000 VNĐ', status: 'Đang xử lý' },
        { id: 2, customerName: 'Trần Thị B', total: '1.000.000 VNĐ', status: 'Đã giao' },
        { id: 3, customerName: 'Lê Văn C', total: '750.000 VNĐ', status: 'Đang xử lý' },
    ];

    const orderTableBody = document.querySelector('#orderTable tbody');

    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.customerName}</td>
            <td>${order.total}</td>
            <td>${order.status}</td>
            <td><button onclick="handleDelete(${order.id})">Xóa</button></td>
        `;
        orderTableBody.appendChild(row);
    });
});

function handleDelete(orderId) {
    if (confirm('Bạn có chắc chắn muốn xóa đơn hàng này?')) {
        const row = document.querySelector(`tr:has(td:contains('${orderId}'))`);
        if (row) {
            row.remove();
            alert('Đơn hàng đã được xóa.');
        }
    }
}