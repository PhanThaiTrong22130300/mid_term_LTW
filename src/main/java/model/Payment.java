package model;

public class Payment {
    private int id;
    private String methodPayment;
    private int orders_id;

    public Payment() {
    }
    public Payment(int id, String methodPayment, int orders_id) {
        this.id = id;
        this.methodPayment = methodPayment;
        this.orders_id = orders_id;
    }

    // Getter và Setter
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMethodPayment() {
        return methodPayment;
    }

    public void setMethodPayment(String methodPayment) {
        this.methodPayment = methodPayment;
    }

    public int getOrders_id() {
        return orders_id;
    }

    public void setOrders_id(int orders_id) {
        this.orders_id = orders_id;
    }
}
