const productHotGrid = document.querySelector('.product-hot-grid');
const btnMore = document.querySelector('.btn-more');
const btnLess = document.querySelector('.btn-less');
const productHotItems = document.querySelectorAll('.product.product-hot');

let showingProductHot = 8;

function showMoreProductHot() {
    for (let i = 0; i < productHotItems.length; i++) {
        productHotItems[i].style.display = 'block';
    }
    btnMore.style.display = 'none';
    btnLess.style.display = 'inline-block';
}

function showLessProductHot() {
    for (let i = 0; i < productHotItems.length; i++) {
        if (i >= showingProductHot) {
            productHotItems[i].style.display = 'none';
        } else {
            productHotItems[i].style.display = 'block';
        }
    }
    btnMore.style.display = 'inline-block';
    btnLess.style.display = 'none';
}


showLessProductHot();

btnMore.addEventListener('click', showMoreProductHot);
btnLess.addEventListener('click', showLessProductHot);

document.querySelectorAll('.btn-add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        alert("Sản phẩm đã được thêm vào giỏ hàng!");
    });
});