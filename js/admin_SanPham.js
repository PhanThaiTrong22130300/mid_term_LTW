const MESSAGES = {

    logout: 'Bạn có chắc muốn đăng xuất?'
};

document.addEventListener('DOMContentLoaded', () => {
    initEventListeners(); // Khởi tạo sự kiện cho các nút
    initNavigation(); // Khởi tạo sự kiện điều hướng
    loadProducts(); // Tải danh sách sản phẩm khi trang được tải
});

// Dữ liệu mẫu về sản phẩm
let products = [
    {
        id: 1,
        name: 'Ví da nam',
        price: 200000,
        quantity: 50,
        color: 'Đen',
        image: 'https://lethnic.vn/cdn/shop/files/LethnicViDungGap3CianVNau01_500x.jpg?v=1685601076',
        description: 'Ví da nam sang trọng'
    },
    {
        id: 2,
        name: 'Ví da nữ',
        price: 150000,
        quantity: 30,
        color: 'Nâu',
        image: 'https://lethnic.vn/cdn/shop/files/LethnicViDungGap3CianVNau01_500x.jpg?v=1685601076',
        description: 'Ví da nữ dễ thương'
    }
];

let editingProduct = null; // Biến lưu trữ sản phẩm đang được sửa

// Load sản phẩm vào bảng
function loadProducts() {
    const tableBody = document.getElementById('product-list');
    tableBody.innerHTML = ''; // Làm sạch bảng trước khi thêm sản phẩm mới

    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            <td>${product.color}</td>
            <td><img src="${product.image}" alt="${product.name}" style="width: 50px;"></td>
            <td>${product.description}</td>
            <td>
                <button class="edit-btn" onclick="editProduct(${product.id})">Sửa</button>
                <button class="delete-btn" onclick="deleteProduct(${product.id})">Xóa</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function addProduct() {
    // Lấy giá trị từ các input
    const name = document.getElementById('product-name').value.trim();
    const price = document.getElementById('product-price').value.trim();
    const quantity = document.getElementById('product-quantity').value.trim();
    const color = document.getElementById('product-color').value.trim();
    const imageInput = document.getElementById('product-image'); // Lấy input file
    const description = document.getElementById('product-description').value.trim();

    // Kiểm tra xem các trường có hợp lệ không
    if (!name || !price || !quantity || !color || !imageInput.files.length || !description) {
        alert("Vui lòng điền đầy đủ thông tin sản phẩm.");
        return; // Dừng hàm nếu có trường không hợp lệ
    }

    // Tạo đối tượng sản phẩm mới
    const newProduct = {
        id: Date.now(), // Tạo ID duy nhất dựa trên thời gian
        name: name,
        price: parseFloat(price), // Chuyển giá thành số
        quantity: parseInt(quantity), // Chuyển số lượng thành số nguyên
        color: color,
        image: URL.createObjectURL(imageInput.files[0]), // Sử dụng URL.createObjectURL để tạo URL cho file ảnh
        description: description
    };

    // Thêm sản phẩm vào mảng sản phẩm
    products.push(newProduct);

    // Cập nhật lại danh sách sản phẩm trong bảng
    loadProducts();

    // Ẩn form thêm s���n phẩm sau khi thêm xong
    document.getElementById('add-product-form').style.display = 'none';

    // Reset các trường input để chuẩn bị cho lần thêm sản phẩm sau
    document.getElementById('add-product-form').reset();
}

function editProduct(productId) {
    // Tìm sản phẩm cần sửa theo ID
    editingProduct = products.find(p => p.id === productId);

    // Kiểm tra xem sản phẩm có tồn tại không
    if (!editingProduct) {
        alert('Sản phẩm không tồn tại!');
        return;
    }

    // Hiển thị form và điền thông tin của sản phẩm vào các trường input
    document.getElementById('product-name').value = editingProduct.name;
    document.getElementById('product-price').value = editingProduct.price;
    document.getElementById('product-quantity').value = editingProduct.quantity;
    document.getElementById('product-color').value = editingProduct.color;
    document.getElementById('product-image').value = editingProduct.image;
    document.getElementById('product-description').value = editingProduct.description;

    // Thay đổi nội dung và chức năng của nút submit
    document.getElementById('submit-product-btn').innerText = 'Cập nhật ';
    document.getElementById('form-title').innerText = 'Sửa sản phẩm'; // Cập nhật tiêu đề

    document.getElementById('submit-product-btn').onclick = function () {
        // Cập nhật lại thông tin sản phẩm trong mảng
        editingProduct.name = document.getElementById('product-name').value;
        editingProduct.price = document.getElementById('product-price').value;
        editingProduct.quantity = document.getElementById('product-quantity').value;
        editingProduct.color = document.getElementById('product-color').value;
        editingProduct.image = document.getElementById('product-image').value;
        editingProduct.description = document.getElementById('product-description').value;

        // Cập nhật lại bảng sản phẩm
        loadProducts();

        // Ẩn form sau khi cập nhật
        document.getElementById('add-product-form').style.display = 'none';
        editingProduct = null; // Reset biến lưu trữ sản phẩm đang sửa
    };

    // Hiển thị form để sửa thông tin sản phẩm
    document.getElementById('add-product-form').style.display = 'block';
}

// Hàm xóa sản phẩm
function deleteProduct(productId) {
    // Tìm chỉ số của sản phẩm trong mảng
    const productIndex = products.findIndex(product => product.id === productId);

    // Nếu tìm thấy sản phẩm, xóa nó khỏi mảng
    if (productIndex !== -1) {
        // Xác nhận trước khi xóa
        const confirmDelete = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
        if (confirmDelete) {
            products.splice(productIndex, 1); // Xóa sản phẩm khỏi mảng
            loadProducts(); // Cập nhật lại danh sách sản phẩm trong bảng
        }
    } else {
        console.error("Sản phẩm không tìm thấy:", productId);
    }
}

// Khởi tạo sự kiện cho các nút "Thêm sản phẩm"
function initEventListeners() {
    document.getElementById('add-product-btn').addEventListener('click', () => {
        document.getElementById('add-product-form').style.display = 'block'; // Hiện form

        document.getElementById('submit-product-btn').onclick = addProduct; // Gắn lại sự kiện cho nút Thêm
    });

    document.getElementById('cancel-product-btn').addEventListener('click', () => {
        document.getElementById('add-product-form').style.display = 'none'; // Ẩn form
    });
}

// Điều hướng trang
function initNavigation() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const section = link.getAttribute('data-section');
            navigateToSection(section);
        });
    });
}

// Điều hư��ng đến các trang liên quan
function navigateToSection(section) {
    const pages = {
        dashboard: '../html/admin.html',
        products: '../html/admin_SanPham.html',
        users: '../html/admin_NguoiDung.html',
        orders: '../html/admin_DonHang.html',
        revenue: '../html/admin_DoanhThu.html',

    };

    if (pages[section]) {
        window.location.href = pages[section];
    }
}// Logout Handler
function handleLogout(e) {
    e.preventDefault();
    if (confirm(MESSAGES.logout)) {
        window.location.href = '../html/dangNhap.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
});

