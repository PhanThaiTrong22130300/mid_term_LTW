<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "f" uri = "http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Trang sản phẩm</title>
  <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/san-pham.css">
  <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/header.css">
  <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/footer.css">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
</head>

<body>
<header>
  <div class="brand">TTD SHOP</div>
  <div class="auth-links">
    <a href="html/dangKy.html"><i class="fas fa-user-plus"></i> Đăng Ký</a>
    <a href="html/dangNhap.html"><i class="fas fa-sign-in-alt"></i> Đăng Nhập</a>
  </div>
</header>

<nav>
  <ul>
    <li><a href="html/trang-chu.html">Trang chủ</a></li>
    <li><a href="../html/san-pham.html">Sản phẩm</a></li>
    <li><a href="html/tin-tuc.html">Tin tức</a></li>
    <li><a href="html/lien-he.html">Liên hệ</a></li>
</ul>

  <div class="search-container">
    <i class="fas fa-search"></i>
    <span class="search-label"></span>
    <input type="text" class="search-box" placeholder="Tìm kiếm ">
  </div>

  <div class="cart">
    <i class="fas fa-shopping-cart cart-icon"></i>
    <a href="html/gio-hang.html" class="cart-text"> Giỏ Hàng</a>
  </div>
</nav>

<div class="image-slider">
  <div class="slides">
    <div class="slide active">
      <img src="https://miro.medium.com/v2/resize:fit:1400/1*i24ihnAIPWfiE_6PX5zCAg.jpeg" alt="Image 1">
    </div>
    <div class="slide">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThSoJfJu-j_2dvGePLtBbyl7flS1GcMP1rrw&s" alt="Image 2">
    </div>
    <div class="slide">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBfOgV2kvv2jPUzWo5nGuj4HKzgjyHKBfu3w&s" alt="Image 3">
    </div>
  </div>
  <button class="prev" onclick="changeSlide(-1)">&#10094;</button>
  <button class="next" onclick="changeSlide(1)">&#10095;</button>
</div>

<h1 class="title">Sản Phẩm Của Chúng Tôi</h1>


<div class="filter-options">
  <label for="action">
    <i class="fas fa-filter"></i> Lọc:
  </label>
  <select id="action">
    <option value="">Chọn bộ lọc/sắp xếp</option>
    <option value="filter-male">Lọc theo nam</option>
    <option value="filter-female">Lọc theo nữ</option>
    <option value="sort-asc">Sắp xếp giá (Tăng dần)</option>
    <option value="sort-desc">Sắp xếp giá (Giảm dần)</option>
    <option value="filter-standing">Lọc theo ví đứng</option>
    <option value="filter-mini">Lọc theo ví mini</option>
    <option value="filter-horizontal">Lọc theo ví dài</option>
  </select>
</div>

<div class="product-container">
  <div class="product">
    <c:forEach var="p" items="${data}">
    <img src="${p.img}" alt="Ảnh sản phẩm">
    <h3>${p.name}</h3>
    <p>Thiết kế tinh tế, độ bền cao</p>
    <div class="price"><f:formatNumber value="${p.price}"></f:formatNumber> <span class="discount">-33%</span></div>
    <div class="product-buttons">
      <button class="btn-buy">Mua Ngay</button>
      <button class="btn-add-to-cart">Thêm vào Giỏ Hàng</button>
    </div>
    </c:forEach>
  </div>
</div>

<footer>

  <div class="footer-:<contact">

    <p><i class="fas fa-phone-alt"></i> Điện thoại:012 345 678</p>
    <p><i class="fas fa-envelope"></i> Email:ttdshop@gmail.com</p>
  </div>

  <div class="footer-content">
    <div class="footer-links">
      <a href="#">Giới Thiệu</a> |
      <a href="#">Điều Khoản</a> |
      <a href="#">Chính Sách Bảo Mật</a>
      <p>&copy; 2024 TTD Shop. Tất cả quyền được bảo lưu.</p>
    </div>
  </div>
</footer>
<script src="js/san-pham.js"></script>
<script src="js/menu.js"></script>

</body>
</html>