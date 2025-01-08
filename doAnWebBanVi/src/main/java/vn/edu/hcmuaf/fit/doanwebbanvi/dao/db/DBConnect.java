package vn.edu.hcmuaf.fit.doanwebbanvi.dao.db;

import java.sql.*;

public class DBConnect {
    static Connection conn;
    static String url = "jdbc:mysql://" + DBProperties.host() + ":" + DBProperties.port() + "/" + DBProperties.dbname() + "?" + DBProperties.option();


    public static Statement getStatement(){
        try{
            if(conn==null||conn.isClosed()){
                Class.forName("com.mysql.cj.jdbc.Driver");
                conn = DriverManager.getConnection(url, DBProperties.username(),DBProperties.password());
            }
            return conn.createStatement();

        }catch (SQLException | ClassNotFoundException e){
            return null;
        }
    }
}
