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
    { id: 8, name: 'Ví Da Gập Đôi Dáng Đứng Nhỏ Gọn - Mini Bloss', price: 405000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViDaNamDangDungMiniBlossXam01_500x.jpg?v=1626505428', description: 'Màu sắc đa dạng', gender: 'male', type: 'ví đứng',discountPercentage: 11 },
    { id: 9, name: 'Ví nữ có nắp LOVE - LADY\n', price: 750000, img: 'https://lethnic.vn/cdn/shop/products/ViNuLove-LadyLoveCollection02_500x.jpg?v=1644597044', description: 'Màu sắc đa dạng', gender: 'female', type: 'ví dài',discountPercentage: 0 },
    { id: 10, name: 'Ví dài LOVE-L\n', price: 850000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViDaiLoveL-ValentineGift01_500x.jpg?v=1644595977', description: 'Chất liệu cao cấp, bền lâu', gender: 'female', type: 'ví đ̀i',discountPercentage: 0 },
    { id: 11, name: 'Ví Dài Meron L - Lethnic\n', price: 780000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViDaiNamNuMeronLNavy01_500x.jpg?v=1699290776', description: 'Mềm mại, phong cách hiện đại', gender: 'female', type: 'ví dài',discountPercentage: 0 },
    { id: 12, name: 'Ví Nam Gập Đôi Dáng Đứng - Saffiano Leather - REVO-V', price: 580000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViGapNamDangDungRevoDen01_500x.jpg?v=1699462132', description: 'Thiết kế đơn giản, sang trọng\n', gender: 'male', type: 'ví đứng',discountPercentage: 28 },
    { id: 13, name: 'Ví nam dáng đứng gập 3 - Cian V\n', price: 620000, img: 'https://lethnic.vn/cdn/shop/files/LethnicViDungGap3CianVNau01_500x.jpg?v=1685601076', description: 'Dễ dàng sử dụng, tiện lợi\n', gender: 'male', type: 'ví đứng',discountPercentage: 0 },
    { id: 14, name: 'Ví đựng card phối màu có nút bấm - Revo C\n', price: 420000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViDungCardPhoiMauCoNutBamRevoC01_500x.jpg?v=1681262233', description: 'Chất liệu da cao cấp\n', gender: 'female', type: 'ví đứng',discountPercentage: 0 },
    { id: 15, name: 'Ví Kẹp Tiền, Đựng Card Nhỏ Gọn - Money Clip Series 02 - HOPEN Trơn\n', price: 450000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViKepTienHopenNau00_500x.jpg?v=1657953129', description: 'Phong cách hiện đại, lịch lãm\n', gender: 'female', type: 'ví đứng',discountPercentage: 15 },
    { id: 16, name: 'Ví nam cao cấp dáng đứng gập ba - MANOR\n', price: 720000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViDungGapBaManor01_500x.jpg?v=1666078056', description: 'Được ưa chuộng, thời trang\n', gender: 'male', type: 'ví đứng',discountPercentage: 21 },
    { id: 17, name: 'Mini Cosy - Ví Da Nam Gập Đôi Mini Mỏng Gọn\n', price: 378000, img: 'https://lethnic.vn/cdn/shop/products/LethnicVinganggapdoiminicosyxam01_500x.jpg?v=1724482768', description: 'Thiết kế thời thượng, bền bỉ', gender: 'male', type: 'ví mini',discountPercentage: 0 },
    { id: 18, name: 'Ví Đựng Thẻ Mini Mỏng, Gọn - Meron C\n', price: 399000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViDungCardNhoGonMeron-C-Xam03_500x.jpg?v=1699290813', description: 'Sang trọng, tinh tế, đẳng cấp\n', gender: 'male', type: 'ví mini',discountPercentage: 0 },
    { id: 19, name: 'Ví dài da sáp Smool-S\n', price: 749000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViDaiDaSapSmoolSap_500x.jpg?v=1627644636', description: 'Lý tưởng cho mọi dịp\n', gender: 'female', type: 'ví dài',discountPercentage: 5 },
    { id: 20, name: 'Ví Dài Da Phối Vải - Leader L\n', price: 550000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViDaiDaPhoiVaiLeaderLNavy01_500x.jpg?v=1650534722', description: 'Da thật, bền bỉ theo thời gian\n', gender: 'female', type: 'ví dài',discountPercentage: 10 },
    { id: 21, name: 'Ví Đứng Cho Nam Meron-V\n', price: 550000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViDungGapDoiMeronVNavy_DaiDien_500x.jpg?v=1699290680', description: 'Kiểu dáng gọn nhẹ, dễ mang theo\n', gender: 'male', type: 'ví đứng',discountPercentage: 0 },
    { id: 22, name: 'Ví Vải Phối Da Dáng Đứng, Nhỏ Gọn, Nam Tính - Nemo\n', price: 439000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViDungNhoGonDaPhoiVaiNemoCamou_500x.jpg?v=1626505288', description: 'Cảm giác mềm mại khi sử dụng\n', gender: 'male', type: 'ví mini',discountPercentage: 25 },
    { id: 23, name: 'Ví Đựng Thẻ Nhân Viên Mini, Siêu Mỏng, Nhỏ Gọn - Lethnic Slim D', price: 299000, img: 'https://lethnic.vn/cdn/shop/products/Slim-D-Xanh_500x.jpg?v=1650193703', description: 'Chất liệu sang trọng, cao cấp\n', gender: 'male', type: 'ví mini',discountPercentage: 0 },
    { id: 24, name: 'Ví Da Sáp Đựng Card Nhỏ Gọn - Slim 02\n', price: 250000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViSlimmongnhogoncamtaySlim02Sap01_fdc1ce5b-be52-4f4f-9722-9b1ff9223b24_500x.jpg?v=1619763771', description: 'Tiện dụng, thiết kế thông minh', gender: 'male', type: 'ví mini',discountPercentage: 0 },
    { id: 25, name: 'Ví dài - Rainbow', price: 449000, img: 'https://lethnic.vn/cdn/shop/products/Rainbow-camo_500x.jpg?v=1619768303', description: 'Nhiều ngăn đựng tiền và thẻ\n', gender: 'female', type: 'ví dài',discountPercentage: 0 },
    { id: 26, name: 'ALLIN - Ví dài với nắp nam châm!\n', price: 579000, img: 'https://lethnic.vn/cdn/shop/products/Aliin_den_3ab2f671-9eca-4c54-ac14-60d11b714d07_500x.jpg?v=1723525878', description: 'Phong cách tối giản, hiện đại\n', gender: 'female', type: 'ví dài',discountPercentage: 0 },
    { id: 27, name: 'Ví Mini Da Phối Vải - Leader C\n', price: 330000, img: 'https://lethnic.vn/cdn/shop/products/LethnicMiniLeader-ViVaiPhoiDaMiniNavy01_500x.jpg?v=1650525719', description: 'Độ bền cao, sử dụng lâu dài\n', gender: 'female', type: 'ví mini',discountPercentage: 0 },
    { id: 28, name: 'Ví Card Đựng Thẻ ATM - Slim Series 02\n', price: 250000, img: 'https://lethnic.vn/cdn/shop/products/Lethnic-Vi-mini-nho-gon-dung-the-tien-Slim-Series-02-Do_500x.jpg?v=1619770698', description: 'Thiết kế mini, gọn nhẹ\n', gender: 'female', type: 'ví mini',discountPercentage: 0 },
    { id: 29, name: 'Ví da bò phối màu gập đôi ngang - Crown M\n', price: 479000, img: 'https://lethnic.vn/cdn/shop/products/Lethnic-Vi-Ngang-Gap-Doi-Phoi-Mau-Crown-M-Den-00_500x.jpg?v=1627111641', description: 'Dễ dàng mang theo, tiện lợi\n', gender: 'female', type: 'ví mini',discountPercentage: 0 },
    { id: 30, name: 'Ví đứng cho nam LOVE - V\n', price: 650000, img: 'https://lethnic.vn/cdn/shop/products/ViNamDungLove-VLoveCollection01_500x.jpg?v=1644596294', description: 'Chất liệu da cao cấp, mềm mại\n', gender: 'male', type: 'ví đứng',discountPercentage: 0 },
    { id: 31, name: 'Ví Đứng Gập 3 Da Phối Vải - Leader T\n', price: 500000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViDaPhoiVaiDangDungGap3-LeaderT-Navy_500x.jpg?v=1652552446', description: 'Dáng đứng, phù hợp với nam\n', gender: 'male', type: 'ví đứng',discountPercentage: 0 },
    { id: 32, name: 'Ví da sáp dáng đứng cổ điển - Rustic-V\n', price: 580000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViDangDungDaSapCoDien-RusticV01_500x.jpg?v=1653403877', description: 'Bền đẹp, không lo bong tróc\n', gender: 'male', type: 'ví đứng',discountPercentage: 8 },
    { id: 33, name: 'SARK - Ví Dài Series 03 Với Nút Bấm\n', price: 599000, img: 'https://lethnic.vn/cdn/shop/products/lethnic_long_wallet_with_snap_button_blue_500x.jpg?v=1631801174', description: 'Phong cách hiện đại, nam tính\n', gender: 'male', type: 'ví dài',discountPercentage: 15 },
    { id: 34, name: 'Ví Da Nam Mini Handmade Kiêm Ví Đựng Thẻ - Rains\n', price: 349000, img: 'https://lethnic.vn/cdn/shop/products/VidamininhogonhandmadeRainsDenSap01_500x.jpg?v=1619767083', description: 'Được làm từ da cao cấp\n', gender: 'male', type: 'ví mini',discountPercentage: 9 },
    { id: 35, name: 'Ví Đựng Card Handmade Nhỏ Gọn - Light\n', price: 259000, img: 'https://lethnic.vn/cdn/shop/products/Light-Mini-Card-Handmade-Navy_500x.jpg?v=1624107392', description: 'Thiết kế nhỏ gọn, tiện dụng\n', gender: 'male', type: 'ví mini',discountPercentage: 0 },
    { id: 36, name: 'SAFET - Ví dài Zip Around\n', price: 799000, img: 'https://lethnic.vn/cdn/shop/products/Lethnic-Vi-dai-co-day-keo-xung-quanh-Safet-Den_500x.jpg?v=1619765605', description: 'Đẹp mắt, dễ dàng mang theo\n', gender: 'female', type: 'ví dài',discountPercentage: 0 },
    { id: 37, name: 'SMOOL - Ví dài Series 01\n', price: 699000, img: 'https://lethnic.vn/cdn/shop/products/Lethnic-Vi-dai-Smool-Do_500x.jpg?v=1619768205', description: 'Phù hợp với phong cách trẻ trung\n', gender: 'female', type: 'ví dài',discountPercentage: 0 },
    { id: 38, name: 'Ví dài da sáp handmade dành cho Nam - Barm L\n', price: 699000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViDaiDaSapBarmLDen01_500x.jpg?v=1627312511', description: 'Chất liệu da cao cấp, bền lâu\n', gender: 'male', type: 'ví dài',discountPercentage: 0 },
    { id: 39, name: 'Ví da nam phối màu dáng đứng - Pride V\n', price: 520000, img: 'https://lethnic.vn/cdn/shop/products/Lethnic-vi-da-nam-phoi-mau-dang-dung---Pride-V-00_500x.jpg?v=1662094553', description: 'Đẹp mắt, sang trọng, bền bỉ', gender: 'male', type: 'ví đứng',discountPercentage: 27 },
    { id: 40, name: 'Ví Tactical Series 01 - Dáng Đứng\n', price: 375000, img: 'https://lethnic.vn/cdn/shop/products/LethnicViDaToiGianHandmadeTactical01-VangBo01_500x.jpg?v=1624883097', description: 'Kiểu dáng hiện đại, tối giản', gender: 'male', type: 'ví đứng',discountPercentage: 9 }

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