package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.ResultSet;


import model.Products;

public class DaoProduct {

    // Hàm chèn sản phẩm vào cơ sở dữ liệu
    public int insert(Products t) {
        int ketQua = 0; // Biến lưu kết quả số dòng bị thay đổi
        PreparedStatement st = null; // Khởi tạo PreparedStatement ở ngoài để đóng đúng cách

        try {
            // Bước 1: Tạo kết nối đến CSDL
            Connection con = JDBCUtil.getConnection();

            // Bước 2: Tạo đối tượng PreparedStatement với câu lệnh SQL
            String sql = "INSERT INTO Product ( category_id, title, image, price, percentDiscount, warehouse, color, description) "
                    + "VALUES ( ?, ?, ?, ?, ?, ?, ?, ?)";

            st = con.prepareStatement(sql);

            // Gán các tham số vào câu lệnh SQL
            st.setInt(1, t.getCategory_id());
            st.setString(2, t.getTitle());
            st.setString(3, t.getImage());
            st.setInt(4, t.getPrice());
            st.setInt(5, t.getPercentDiscount());
            st.setString(6, t.getWarehouse());
            st.setString(7, t.getColor());
            st.setString(8, t.getDescription());

            // Bước 3: Thực thi câu lệnh SQL
            ketQua = st.executeUpdate();

            // In thông tin kết quả
            System.out.println("Bạn đã thực thi: " + sql);
            System.out.println("Có " + ketQua + " dòng bị thay đổi!");

        } catch (SQLException e) {
            // Xử lý lỗi và in thông tin chi tiết
            System.err.println("Lỗi khi chèn sản phẩm: " + e.getMessage());
            e.printStackTrace();
        } finally {
            // Bước 4: Đóng PreparedStatement và Connection
            if (st != null) {
                try {
                    st.close();
                } catch (SQLException e) {
                    System.err.println("Lỗi khi đóng PreparedStatement: " + e.getMessage());
                }
            }
        }

        return ketQua;
    }

    public Products selectById(Products t) {
        Products ketQua = null; // Đối tượng để lưu kết quả
        PreparedStatement st = null; // PreparedStatement để thực thi truy vấn
        ResultSet rs = null; // ResultSet để nhận dữ liệu trả về

        try {
            // Bước 1: Tạo kết nối
            Connection con = JDBCUtil.getConnection();

            // Bước 2: Tạo câu lệnh SQL
            String sql = "SELECT * FROM Product WHERE id=?";
            st = con.prepareStatement(sql);
            st.setInt(1, t.getId());

            // Bước 3: Thực thi câu lệnh và lấy kết quả
            rs = st.executeQuery();

            // Bước 4: Xử lý kết quả
            if (rs.next()) {
                int id = rs.getInt("id");
                int category_id = rs.getInt("category_id");
                String title = rs.getString("title");
                String image = rs.getString("image");
                int price = rs.getInt("price");
                int percentDiscount = rs.getInt("percentDiscount");
                String warehouse = rs.getString("warehouse");
                String color = rs.getString("color");
                String description = rs.getString("description");

                // Tạo đối tượng Products từ kết quả truy vấn
                ketQua = new Products(category_id, title, image, price, percentDiscount, warehouse, color, description);
            }
        } catch (SQLException e) {
            e.printStackTrace(); // In thông tin lỗi nếu có
        } finally {
            // Bước 5: Đóng tài nguyên
            if (rs != null) {
                try {
                    rs.close();
                } catch (SQLException e) {
                    System.err.println("Lỗi khi đóng ResultSet: " + e.getMessage());
                }
            }
            if (st != null) {
                try {
                    st.close();
                } catch (SQLException e) {
                    System.err.println("Lỗi khi đóng PreparedStatement: " + e.getMessage());
                }
            }
        }

        return ketQua; // Trả về đối tượng Products (null nếu không tìm thấy)
    }


    // Hàm chính để kiểm tra
    public static void main(String[] args) {
        // Khởi tạo đối tượng DaoProduct
        DaoProduct daoProduct = new DaoProduct();

        // Tạo một sản phẩm mẫu
        Products product = new Products(
                1,

               // ID danh mục
                "Iphone 12", // Tên sản phẩm
                "iphone12.jpg", // Hình ảnh sản phẩm
                20000000, // Giá sản phẩm
                10, // Giảm giá (%)
                "Hà Nội", // Kho hàng
                "Đen", // Màu sắc
                "Điện thoại Iphone 12" // Mô tả sản phẩm
        );

        // Gọi hàm insert để thêm sản phẩm vào cơ sở dữ liệu
        int rowsAffected = daoProduct.insert(product);

        // Thông báo kết quả
        System.out.println("Số dòng bị thay đổi: " + rowsAffected);

//        // Tạo một đối tượng Products để tìm kiếm (chỉ cần set ID)
//        Products productToFind = new Products(1, 0, null, null, 0, 0, null, null, null);
//
//        // Gọi hàm selectById để tìm sản phẩm với ID = 1
//        Products foundProduct = daoProduct.selectById(productToFind);
//
//        // Kiểm tra và in kết quả
//        if (foundProduct != null) {
//            System.out.println("Sản phẩm tìm thấy:");
//            System.out.println("ID: " + foundProduct.getId());
//            System.out.println("Danh mục: " + foundProduct.getCategory_id());
//            System.out.println("Tên sản phẩm: " + foundProduct.getTitle());
//            System.out.println("Hình ảnh: " + foundProduct.getImage());
//            System.out.println("Giá: " + foundProduct.getPrice());
//            System.out.println("Giảm giá: " + foundProduct.getPercentDiscount() + "%");
//            System.out.println("Kho hàng: " + foundProduct.getWarehouse());
//            System.out.println("Màu sắc: " + foundProduct.getColor());
//            System.out.println("Mô tả: " + foundProduct.getDescription());
//        } else {
//            System.out.println("Không tìm thấy sản phẩm với ID = " + productToFind.getId());
//        }
    }
}
