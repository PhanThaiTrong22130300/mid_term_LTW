package vn.edu.hcmuaf.fit.doanwebbanvi.dao.model;

import java.io.Serializable;

public class Product implements Serializable {
    private int id;
    private String name;
//    private String description;
    private double price;
    private String img;

    public Product(int id, String name, double price, String img) {
        this.id = id;
        this.name = name;
//        this.description = description;
        this.price = price;
        this.img = img;
    }

    public Product() {
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public String getImg() {
        return img;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setImg(String img) {
        this.img = img;
    }

//    public String getDescription() {
//        return description;
//    }
//
//    public void setDescription(String description) {
//        this.description = description;
//    }
}
