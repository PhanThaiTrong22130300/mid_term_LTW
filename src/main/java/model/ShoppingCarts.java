package model;

public class ShoppingCarts {
    private int id;
    private int order_id;
    private int product_id;
    private int purchaseQuantity;
    private double total_money;

    public ShoppingCarts() {
    }
    public ShoppingCarts(int id, int order_id, int product_id, int purchaseQuantity, double total_money) {
        this.id = id;
        this.order_id = order_id;
        this.product_id = product_id;
        this.purchaseQuantity = purchaseQuantity;
        this.total_money = total_money;
    }


    // Getter và Setter
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getOrder_id() {
        return order_id;
    }

    public void setOrder_id(int order_id) {
        this.order_id = order_id;
    }

    public int getProduct_id() {
        return product_id;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public int getPurchaseQuantity() {
        return purchaseQuantity;
    }

    public void setPurchaseQuantity(int purchaseQuantity) {
        this.purchaseQuantity = purchaseQuantity;
    }

    public double getTotal_money() {
        return total_money;
    }

    public void setTotal_money(double total_money) {
        this.total_money = total_money;
    }
}
