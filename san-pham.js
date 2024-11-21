let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function changeSlide(n) {
    slideIndex += n;
    const slides = document.getElementsByClassName("slide");
    if (slideIndex >= slides.length) {slideIndex = 0;}
    if (slideIndex < 0) {slideIndex = slides.length - 1;}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

showSlides();

const products = [
    { id: 1, name: 'Ví Nam Dáng Đứng Gập - Cian V', price: 560000, img: 'https://lethnic.vn/cdn/shop/files/LethnicViDungGap3CianVNau01_500x.jpg?v=1685601076', description: 'Thiết kế tinh tế, độ bền cao', gender: 'male', type: 'ví đứng', discountPercentage: 33 },
    { id: 2, name: 'Noble - Ví Đứng Gập Ba', price: 472000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViDungGapBaDaThatNobleNavy01_500x.jpg?v=1624976849', description: 'Phong cách thời trang', gender: 'male', type: 'ví đứng',discountPercentage: 0 },
    { id: 3, name: 'Ví Dài Meron L - Lethnic', price: 780000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViDaiNamNuMeronLNavy01_500x.jpg?v=1699290776', description: 'Sang trọng và tiện dụng', gender: 'female', type: 'ví dài',discountPercentage: 0 },
    { id: 4, name: 'Ví dài gập đôi cầm tay da bò - Crown L\n', price: 699000, img: 'https://lethnic.vn/cdn/shop/products/Lethnic-Vi-Dai-Gap-Doi-Nho-Gon-Crown-L-Navy-00_500x.jpg?v=1627154130', description: 'Kiểu dáng hiện đại', gender: 'female', type: 'ví dài',discountPercentage: 0 },
    { id: 5, name: 'Ví dài có có ngăn dây kéo & nút bấm - Revo L\n', price: 795000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViDaiCoNutBamRevoL01_500x.jpg?v=1681209901', description: 'Độ bền cao, đẹp mắt', gender: 'male', type: 'ví dài',discountPercentage: 15 },
    { id: 6, name: 'Ví Đựng Thẻ Nhỏ Gọn - Lucky-C\n', price: 399000, img: 'https://lethnic.vn/cdn/shop/products/LethnicVidungcardnhogo-LuckyCEpsomLeatherDo01_500x.jpg?v=1668406075', description: 'Nhiều ngăn tiện lợi', gender: 'female', type: 'ví mini',discountPercentage: 0 },
    { id: 7, name: 'Ví da sáp dáng đứng - Twilight.\n', price: 479000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViDaSapDangDungTwilightNauDaiDien_500x.jpg?v=1626505197', description: 'Kiểu dáng thời trang', gender: 'male', type: 'ví đứng',discountPercentage: 0 },
    { id: 8, name: 'Ví Da Gập Đôi Dáng Đứng Nhỏ Gọn - Mini Bloss', price: 405000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViDaNamDangDungMiniBlossXam01_500x.jpg?v=1626505428', description: 'Màu sắc đa dạng', gender: 'male', type: 'ví đứng',discountPercentage: 11 }
];

// Hàm hiển thị sản phẩm
function displayProducts(productsToDisplay) {
    const productContainer = document.querySelector('.product-container');
    productContainer.innerHTML = ''; // Xóa danh sách sản phẩm hiện tại
    productsToDisplay.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';

        // Kiểm tra nếu có giảm giá
        let discountHTML = '';
        if (product.discountPercentage > 0) {
            discountHTML = `<span class="discount">-${product.discountPercentage}%</span>`;
        }

        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3><a href="chi-tiet-sp.html">${product.name}</a></h3>
            <p>${product.description}</p>
            <div class="price">${product.price.toLocaleString()}đ ${discountHTML}</div>
            <div class="product-buttons">
                <button class="btn-buy">Mua Ngay</button>
                <button class="btn-add-to-cart">Thêm vào Giỏ Hàng</button>
            </div>
        `;
        productContainer.appendChild(productElement);
    });
}

// Hàm xử lý lựa chọn từ dropdown
function handleActionSelection() {
    const action = document.getElementById('action').value;
    let filteredProducts = [...products]; // Copy mảng để tránh thay đổi trực tiếp mảng gốc

    // Lọc theo giới tính
    if (action === 'filter-male') {
        filteredProducts = filteredProducts.filter(product => product.gender === 'male');
    } else if (action === 'filter-female') {
        filteredProducts = filteredProducts.filter(product => product.gender === 'female');
    }
    // Lọc theo loại ví
    else if (action === 'filter-standing') {
        filteredProducts = filteredProducts.filter(product => product.type === 'ví đứng');
    } else if (action === 'filter-mini') {
        filteredProducts = filteredProducts.filter(product => product.type === 'ví mini');
    } else if (action === 'filter-horizontal') {
        filteredProducts = filteredProducts.filter(product => product.type === 'ví dài');
    }
    // Sắp xếp theo giá
    else if (action === 'sort-asc') {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (action === 'sort-desc') {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }

    displayProducts(filteredProducts);
}

// Gán sự kiện thay đổi cho dropdown để tự động cập nhật sản phẩm khi lựa chọn thay đổi
document.getElementById('action').addEventListener('change', handleActionSelection);

// Hiển thị tất cả sản phẩm lúc khởi động trang
displayProducts(products);