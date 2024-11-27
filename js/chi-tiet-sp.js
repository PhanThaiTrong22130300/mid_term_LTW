// Change main product image when a thumbnail is clicked
const thumbnails = document.querySelectorAll('.thumbnails img');
const mainImage = document.querySelector('.product-main-image');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (e) => {
        mainImage.src = e.target.src;
    });
});

// Quantity selector functionality
const quantityInput = document.querySelector('.quantity-selector input');
const quantityDesc = document.querySelector('.quantity-desc');
const quantityIns = document.querySelector('.quantity-ins');

// Decrement quantity
quantityDesc.addEventListener('click', () => {
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
});

// Increment quantity
quantityIns.addEventListener('click', () => {
    let currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
});

// Add to cart button functionality
const addToCartButton = document.querySelector('.add-to-cart');
addToCartButton.addEventListener('click', () => {
    alert('Sản phẩm đã được thêm vào giỏ hàng!');
});

// Buy now button functionality
const buyNowButton = document.querySelector('.buy-now a');
buyNowButton.addEventListener('click', (e) => {
    e.preventDefault(); 
    window.location.href = '../html/thanh-toan.html';
});
// Get the elements for the main image, thumbnails, and arrow buttons
// const mainImage = document.querySelector('.product-main-image');
// const thumbnails = document.querySelectorAll('.thumbnails img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Track the current thumbnail index
let currentIndex = 0;

// Function to change the main image based on the thumbnail clicked
function updateMainImage(index) {
    mainImage.src = thumbnails[index].src; // Update the main image with the thumbnail clicked
    currentIndex = index;
}

// Event listener for when a thumbnail is clicked
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        updateMainImage(index);
    });
});

// Event listener for the "previous" button
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        updateMainImage(currentIndex - 1);
    } else {
        updateMainImage(thumbnails.length - 1); // Go to the last thumbnail if at the first one
    }
});

// Event listener for the "next" button
nextButton.addEventListener('click', () => {
    if (currentIndex < thumbnails.length - 1) {
        updateMainImage(currentIndex + 1);
    } else {
        updateMainImage(0); // Go to the first thumbnail if at the last one
    }
});

