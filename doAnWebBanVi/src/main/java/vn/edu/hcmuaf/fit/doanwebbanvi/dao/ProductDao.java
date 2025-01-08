package vn.edu.hcmuaf.fit.doanwebbanvi.dao;

import vn.edu.hcmuaf.fit.doanwebbanvi.dao.db.DBConnect;
import vn.edu.hcmuaf.fit.doanwebbanvi.dao.model.Product;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class ProductDao {

    public List<Product> getAll() {
        Statement statement = DBConnect.getStatement();
        ResultSet rs = null;
        try {
            rs = statement.executeQuery("select * from products");
            List<Product> re = new ArrayList<Product>();
            while (rs.next()) {
                re.add(new Product(rs.getInt(1), rs.getString(2), rs.getDouble(3), rs.getString(4)));
            }
            return re;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public Product getByID(int id) {
        Statement statement = DBConnect.getStatement();
        ResultSet rs = null;
        try {
            rs = statement.executeQuery("select * from products where id = " + id);
            if (rs.next()) {
                return new Product(rs.getInt(1), rs.getString(2), rs.getDouble(3), rs.getString(4));
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return null;
    }
}
