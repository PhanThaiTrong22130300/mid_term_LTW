document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    document.getElementById('add-product-btn').addEventListener('click', showAddProductForm);
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

function loadProducts() {
    // Simulate loading products
    const products = [
        { name: 'Ví da nam', price: '500.000đ', quantity: 10 },
        { name: 'Ví da nữ', price: '600.000đ', quantity: 5 },
    ];
    const tableBody = document.getElementById('products-table-body');
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            <td><button onclick="editProduct('${product.name}')">Sửa</button> <button onclick="deleteProduct('${product.name}')">Xóa</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function showAddProductForm() {
    document.getElementById('add-product-form').style.display = 'block'; // Hiển thị bảng thêm sản phẩm
}

function editProduct(name) {
    // Logic to edit a product
    alert(`Sửa sản phẩm: ${name}`);
}

function deleteProduct(name) {
    // Logic to delete a product
    alert(`Xóa sản phẩm: ${name}`);
}

document.getElementById('cancel-product-btn').addEventListener('click', function () {
    document.getElementById('add-product-form').style.display = 'none'; // Ẩn bảng thêm sản phẩm
});

document.getElementById('submit-product-btn').addEventListener('click', function () {
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const quantity = document.getElementById('product-quantity').value;

    // Thêm sản phẩm vào bảng
    const tableBody = document.getElementById('products-table-body');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${price}</td>
        <td>${quantity}</td>
        <td><button class="delete-btn">Xóa</button></td>
    `;

    // Xóa giá trị trong form và ẩn bảng
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-quantity').value = '';
    document.getElementById('add-product-form').style.display = 'none'; // Ẩn bảng thêm sản phẩm

    // Thêm sự kiện xóa cho nút xóa
    newRow.querySelector('.delete-btn').addEventListener('click', function () {
        tableBody.deleteRow(newRow.rowIndex - 1); // Xóa hàng
    });
});