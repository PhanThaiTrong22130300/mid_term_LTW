package dao;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBCUtil {
    // Phương thức để lấy kết nối
    public static Connection getConnection() {
        Connection connection = null;
        try {
            String url = "jdbc:mysql://localhost:3306/myweb"; // Đảm bảo tên DB chính xác
            String username = "root";
            String password = "";

            connection = DriverManager.getConnection(url, username, password);
        } catch (SQLException e) {
            System.err.println("Error while connecting to the database: " + e.getMessage());
            e.printStackTrace();
        }
        return connection;



    }

    // Phương thức để đóng kết nối
    public static void closeConnection(Connection connection) {
        if (connection != null) {
            try {
                connection.close();
            } catch (SQLException e) {
                System.err.println("Error while closing connection: " + e.getMessage());
                e.printStackTrace();
            }
        }
    }

    // Phương thức để in thông tin cơ sở dữ liệu
    public static void printInfo(Connection connection) {
        try {
            if (connection != null) {
                DatabaseMetaData metaData = connection.getMetaData();
                System.out.println("Database Product Name: " + metaData.getDatabaseProductName());
                System.out.println("Database Product Version: " + metaData.getDatabaseProductVersion());
            }
        } catch (SQLException e) {
            System.err.println("Error while fetching database metadata: " + e.getMessage());
            e.printStackTrace();
        }
    }
}



