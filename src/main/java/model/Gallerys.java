package model;

public class Gallerys {
    private int id;
    private int product_id;
    private String image;

    public Gallerys() {
    }
    public Gallerys(int id, int product_id, String image) {
        this.id = id;
        this.product_id = product_id;
        this.image = image;
    }

    // Getter và Setter
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getProduct_id() {
        return product_id;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
