document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    document.getElementById('add-product-btn').addEventListener('click', addProduct);
});

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

function addProduct() {
    // Logic to add a new product
    alert('Thêm sản phẩm mới!');
}

function editProduct(name) {
    // Logic to edit a product
    alert(`Sửa sản phẩm: ${name}`);
}

function deleteProduct(name) {
    // Logic to delete a product
    alert(`Xóa sản phẩm: ${name}`);
}