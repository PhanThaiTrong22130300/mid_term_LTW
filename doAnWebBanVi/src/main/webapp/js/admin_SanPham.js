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

let products = []; // Biến toàn cục để lưu trữ sản phẩm

function loadProducts() {
    // Simulate loading products
    products = [
        { name: 'Ví da nam', price: '500.000đ', quantity: 10 },
        { name: 'Ví da nữ', price: '600.000đ', quantity: 5 },
    ];
    displayProducts();
}

function displayProducts() {
    const tableBody = document.getElementById('products-table-body');
    tableBody.innerHTML = ''; // Xóa nội dung cũ
    products.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            <td>
                <button onclick="editProduct(${index})">Sửa</button>
                <button onclick="deleteProduct(${index})">Xóa</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function showAddProductForm() {
    document.getElementById('add-product-form').style.display = 'block'; // Hiển thị bảng thêm sản phẩm
}

function editProduct(index) {
    const product = products[index];
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-price').value = product.price;
    document.getElementById('product-quantity').value = product.quantity;
    document.getElementById('add-product-form').style.display = 'block'; // Hiển thị bảng thêm sản phẩm
    document.getElementById('submit-product-btn').onclick = function () {
        updateProduct(index);
    };
}

function updateProduct(index) {
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const quantity = document.getElementById('product-quantity').value;

    products[index] = { name, price, quantity }; // Cập nhật sản phẩm
    displayProducts(); // Cập nhật bảng sản phẩm
    clearForm(); // Xóa giá trị trong form
}

function deleteProduct(index) {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
        products.splice(index, 1); // Xóa sản phẩm
        displayProducts(); // Cập nhật bảng sản phẩm
    }
}

function clearForm() {
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-quantity').value = '';
    document.getElementById('add-product-form').style.display = 'none'; // Ẩn bảng thêm sản phẩm
}

document.getElementById('cancel-product-btn').addEventListener('click', clearForm);

document.getElementById('submit-product-btn').addEventListener('click', function () {
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const quantity = document.getElementById('product-quantity').value;

    // Thêm sản phẩm vào bảng
    products.push({ name, price, quantity });
    displayProducts(); // Cập nhật bảng sản phẩm
    clearForm(); // Xóa giá trị trong form
});