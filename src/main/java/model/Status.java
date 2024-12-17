package model;

public class Status {
    private int id;
    private String nameStatus;
    private int orders_id;

    public Status() {
    }
    public Status(int id, String nameStatus, int orders_id) {
        this.id = id;
        this.nameStatus = nameStatus;
        this.orders_id = orders_id;
    }

    // Getter và Setter
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNameStatus() {
        return nameStatus;
    }

    public void setNameStatus(String nameStatus) {
        this.nameStatus = nameStatus;
    }

    public int getOrders_id() {
        return orders_id;
    }

    public void setOrders_id(int orders_id) {
        this.orders_id = orders_id;
    }
}
