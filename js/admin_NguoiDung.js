document.addEventListener('DOMContentLoaded', () => {
    loadUsers();

    // Khởi tạo sự kiện cho nút đăng xuất
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }

    // Sự kiện hiển thị form thêm người dùng
    document.getElementById('add-user-btn').addEventListener('click', showAddUserForm);

    // Xử lý liên kết sidebar
    const links = document.querySelectorAll('.sidebar nav a');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định

            // Loại bỏ class 'active' khỏi các liên kết
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active'); // Thêm class 'active' cho liên kết được click

            // Điều hướng đến trang tương ứng
            const section = this.getAttribute('data-section');
            navigateToSection(section);
        });
    });
});

// Điều hướng đến các trang tương ứng
function navigateToSection(section) {
    const pages = {
        dashboard: '../html/admin.html',
        products: '../html/admin_SanPham.html',
        users: '../html/admin_NguoiDung.html',
        orders: '../html/admin_DonHang.html',
        revenue: '../html/admin_DoanhThu.html'
    };

    if (pages[section]) {
        window.location.href = pages[section];
    }
}

let users = []; // Biến toàn cục để lưu trữ danh sách người dùng
let editIndex = -1; // Biến toàn cục để theo dõi người dùng đang chỉnh sửa

// Tải dữ liệu giả lập
function loadUsers() {
    users = [
        { name: 'Nguyễn Văn A', phone: '0909090909', address: 'Hà Nội', email: 'a@example.com', role: 'Quản trị viên' },
        { name: 'Trần Thị B', phone: '0909090909', address: 'Hà Nội', email: 'b@example.com', role: 'Người dùng' },
    ];
    displayUsers();
}

// Hiển thị danh sách người dùng lên bảng
function displayUsers() {
    const tableBody = document.getElementById('users-table-body');
    tableBody.innerHTML = ''; // Xóa nội dung cũ

    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.phone}</td>
            <td>${user.address}</td>
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

// Hiển thị form thêm người dùng
function showAddUserForm() {
    clearUserForm(); // Dọn dẹp form
    document.getElementById('form-title').innerText = 'Thêm người dùng'; // Cập nhật tiêu đề
    document.getElementById('add-user-form').style.display = 'block'; // Hiển thị form
}

// Hàm xử lý sự kiện khi nhấn nút "Sửa"
function editUser(index) {
    const user = users[index]; // Lấy thông tin người dùng cần sửa

    // Điền thông tin vào form
    document.getElementById('user-name').value = user.name;
    document.getElementById('user-phone').value = user.phone;
    document.getElementById('user-address').value = user.address;
    document.getElementById('user-email').value = user.email;
    document.getElementById('user-role').value = user.role;

    // Lưu chỉ số người dùng đang sửa
    editIndex = index;

    // Hiện form và thay đổi nút "Xác nhận" thành "Cập nhật"
    document.getElementById('add-user-form').style.display = 'block';
    const submitUserBtn = document.getElementById('submit-user-btn');
    submitUserBtn.innerText = 'Cập nhật';
    document.getElementById('form-title').innerText = 'Sửa người dùng'; // Cập nhật tiêu đề

    // Gỡ bỏ sự kiện cũ trước khi thêm sự kiện mới
    submitUserBtn.onclick = function () {
        // Lấy dữ liệu từ form
        const name = document.getElementById('user-name').value;
        const phone = document.getElementById('user-phone').value;
        const address = document.getElementById('user-address').value;
        const email = document.getElementById('user-email').value;
        const role = document.getElementById('user-role').value;

        // Cập nhật thông tin người dùng
        users[editIndex] = { name, phone, address, email, role };

        // Cập nhật lại bảng người dùng
        displayUsers();
        clearUserForm();
    };
}

// Xóa người dùng
function deleteUser(index) {
    if (confirm('Bạn có chắc chắn muốn xóa người dùng này?')) {
        users.splice(index, 1); // Xóa người dùng khỏi danh sách
        displayUsers(); // Cập nhật lại bảng
    }
}

// Dọn dẹp form và ẩn nó
function clearUserForm() {
    document.getElementById('user-name').value = '';
    document.getElementById('user-phone').value = '';
    document.getElementById('user-address').value = '';
    document.getElementById('user-email').value = '';
    document.getElementById('user-role').value = '';
    document.getElementById('add-user-form').style.display = 'none'; // Ẩn form
    editIndex = -1; // Reset trạng thái sửa
}

// Hủy thao tác và ẩn form
document.getElementById('cancel-user-btn').addEventListener('click', clearUserForm);

const MESSAGES = {

    logout: 'Bạn có chắc muốn đăng xuất?'
};


// Logout Handler
function handleLogout(e) {
    e.preventDefault();
    if (confirm(MESSAGES.logout)) {
        window.location.href = '../html/dangNhap.html';
    }
}

