package model;
public class Products {
    private int id;
    private int category_id;
    private String title;
    private String image;
    private int price;
    private int percentDiscount;
    private String warehouse;
    private String color;
    private String description;

    public Products() {
    }
    public Products( int category_id, String title, String image, int price, int percentDiscount, String warehouse, String color, String description) {
        this.category_id = category_id;
        this.title = title;
        this.image = image;
        this.price = price;
        this.percentDiscount = percentDiscount;
        this.warehouse = warehouse;
        this.color = color;
        this.description = description;
    }

    // Getter và Setter
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCategory_id() {
        return category_id;
    }

    public void setCategory_id(int category_id) {
        this.category_id = category_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getPercentDiscount() {
        return percentDiscount;
    }

    public void setPercentDiscount(int percentDiscount) {
        this.percentDiscount = percentDiscount;
    }

    public String getWarehouse() {
        return warehouse;
    }

    public void setWarehouse(String warehouse) {
        this.warehouse = warehouse;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
