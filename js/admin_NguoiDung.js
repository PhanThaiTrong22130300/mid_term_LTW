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

let users = []; // Biến toàn cục để lưu trữ người dùng

function loadUsers() {
    // Simulate loading users
    users = [
        { name: 'Nguyễn Văn A', email: 'a@example.com', role: 'Quản trị viên' },
        { name: 'Trần Thị B', email: 'b@example.com', role: 'Người dùng' },
    ];
    displayUsers();
}

function displayUsers() {
    const tableBody = document.getElementById('users-table-body');
    tableBody.innerHTML = ''; // Xóa nội dung cũ
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>
                <button onclick="editUser(${index})">Sửa</button>
                <button onclick="deleteUser(${index})">Xóa</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function showAddUserForm() {
    document.getElementById('add-user-form').style.display = 'block'; // Hiển thị bảng thêm người dùng
}

function editUser(index) {
    const user = users[index];
    document.getElementById('user-name').value = user.name;
    document.getElementById('user-email').value = user.email;
    document.getElementById('user-role').value = user.role;
    document.getElementById('add-user-form').style.display = 'block'; // Hiển thị bảng thêm người dùng
    document.getElementById('submit-user-btn').onclick = function () {
        updateUser(index);
    };
}

function updateUser(index) {
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const role = document.getElementById('user-role').value;

    users[index] = { name, email, role }; // Cập nhật người dùng
    displayUsers(); // Cập nhật bảng người dùng
    clearUserForm(); // Xóa giá trị trong form
}

function deleteUser(index) {
    if (confirm('Bạn có chắc chắn muốn xóa người dùng này?')) {
        users.splice(index, 1); // Xóa người dùng
        displayUsers(); // Cập nhật bảng người dùng
    }
}

function clearUserForm() {
    document.getElementById('user-name').value = '';
    document.getElementById('user-email').value = '';
    document.getElementById('user-role').value = '';
    document.getElementById('add-user-form').style.display = 'none'; // Ẩn bảng thêm người dùng
}

document.getElementById('cancel-user-btn').addEventListener('click', clearUserForm);

document.getElementById('submit-user-btn').addEventListener('click', function () {
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const role = document.getElementById('user-role').value;

    // Thêm người dùng vào bảng
    users.push({ name, email, role });
    displayUsers(); // Cập nhật bảng người dùng
    clearUserForm(); // Xóa giá trị trong form
});