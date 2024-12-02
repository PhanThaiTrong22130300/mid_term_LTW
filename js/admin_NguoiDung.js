document.addEventListener('DOMContentLoaded', () => {
    loadUsers();
    document.getElementById('add-user-btn').addEventListener('click', showAddUserForm);
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

function loadUsers() {
    // Simulate loading users
    const users = [
        { name: 'Nguyễn Văn A', email: 'a@example.com', role: 'Quản trị viên' },
        { name: 'Trần Thị B', email: 'b@example.com', role: 'Người dùng' },
    ];
    const tableBody = document.getElementById('users-table-body');
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td><button onclick="editUser('${user.name}')">Sửa</button> <button onclick="deleteUser('${user.name}')">Xóa</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function showAddUserForm() {
    document.getElementById('add-user-form').style.display = 'block'; // Hiển thị bảng thêm người dùng
}

function editUser(name) {
    // Logic to edit a user
    alert(`Sửa người dùng: ${name}`);
}

function deleteUser(name) {
    // Logic to delete a user
    alert(`Xóa người dùng: ${name}`);
}

document.getElementById('cancel-user-btn').addEventListener('click', function () {
    document.getElementById('add-user-form').style.display = 'none'; // Ẩn bảng thêm người dùng
});

document.getElementById('submit-user-btn').addEventListener('click', function () {
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const role = document.getElementById('user-role').value;

    // Thêm người dùng vào bảng
    const tableBody = document.getElementById('users-table-body');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${role}</td>
        <td><button class="delete-btn">Xóa</button></td>
    `;

    // Xóa giá trị trong form và ẩn bảng
    document.getElementById('user-name').value = '';
    document.getElementById('user-email').value = '';
    document.getElementById('user-role').value = '';
    document.getElementById('add-user-form').style.display = 'none'; // Ẩn bảng thêm người dùng

    // Thêm sự kiện xóa cho nút xóa
    newRow.querySelector('.delete-btn').addEventListener('click', function () {
        tableBody.deleteRow(newRow.rowIndex - 1); // Xóa hàng
    });
});