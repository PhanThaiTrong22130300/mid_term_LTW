package model;

public class Orders {
    private int id;
    private int user_id;
    private String order_date;
    private String address_shipping;

    public Orders() {
    }
    public Orders(int id, int user_id, String order_date, String address_shipping) {
        this.id = id;
        this.user_id = user_id;
        this.order_date = order_date;
        this.address_shipping = address_shipping;
    }

    // Getter và Setter
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getOrder_date() {
        return order_date;
    }

    public void setOrder_date(String order_date) {
        this.order_date = order_date;
    }

    public String getAddress_shipping() {
        return address_shipping;
    }

    public void setAddress_shipping(String address_shipping) {
        this.address_shipping = address_shipping;
    }
}
