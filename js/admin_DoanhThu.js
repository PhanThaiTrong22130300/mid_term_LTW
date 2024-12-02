document.addEventListener('DOMContentLoaded', () => {
    loadRevenue();
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

    // Thêm sự kiện cho nút lọc
    document.getElementById('filter-btn').addEventListener('click', filterRevenue);
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

let revenueData = []; // Biến toàn cục để lưu trữ dữ liệu doanh thu

function loadRevenue() {
    // Simulate loading revenue data
    revenueData = [
        { month: 'Tháng 1', revenue: '10.000.000đ', orders: 50 },
        { month: 'Tháng 2', revenue: '15.000.000đ', orders: 75 },
        { month: 'Tháng 3', revenue: '20.000.000đ', orders: 100 },
    ];
    displayRevenue(revenueData);
}

function displayRevenue(data) {
    const tableBody = document.getElementById('revenue-table-body');
    tableBody.innerHTML = ''; // Xóa nội dung cũ
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.month}</td>
            <td>${item.revenue}</td>
            <td>${item.orders}</td>
        `;
        tableBody.appendChild(row);
    });
}

function filterRevenue() {
    const selectedMonth = document.getElementById('month-filter').value;
    let filteredData;

    if (selectedMonth === 'all') {
        filteredData = revenueData; // Hiển thị tất cả nếu chọn "Tất cả"
    } else {
        filteredData = revenueData.filter(item => item.month === `Tháng ${selectedMonth}`);
    }

    displayRevenue(filteredData);
}