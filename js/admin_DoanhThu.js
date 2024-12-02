document.addEventListener('DOMContentLoaded', () => {
    const revenueData = [
        { month: 1, year: 2023, total: 5000000 },
        { month: 2, year: 2023, total: 7000000 },
        { month: 3, year: 2023, total: 6000000 },
        { month: 4, year: 2023, total: 8000000 },
        { month: 5, year: 2023, total: 9000000 },
        { month: 6, year: 2023, total: 10000000 },
    ];

    const revenueTableBody = document.querySelector('#revenueTable tbody');
    const totalRevenueElement = document.getElementById('totalRevenue');
    const filterBtn = document.getElementById('filterBtn');
    const monthSelect = document.getElementById('month');

    function updateRevenueTable(data) {
        revenueTableBody.innerHTML = '';
        let totalRevenue = 0;

        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.month}</td>
                <td>${item.year}</td>
                <td>${item.total.toLocaleString()} VNĐ</td>
            `;
            revenueTableBody.appendChild(row);
            totalRevenue += item.total;
        });

        totalRevenueElement.textContent = totalRevenue.toLocaleString() + ' VNĐ';
    }

    filterBtn.addEventListener('click', () => {
        const selectedMonth = parseInt(monthSelect.value);
        const filteredData = revenueData.filter(item => item.month === selectedMonth);
        updateRevenueTable(filteredData);
    });

    // Hiển thị tất cả doanh thu ban đầu
    updateRevenueTable(revenueData);
});