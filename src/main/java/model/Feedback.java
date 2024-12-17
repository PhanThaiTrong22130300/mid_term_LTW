package model;

public class Feedback {
    private int id;
    private int user_id;
    private String fullname;
    private String email;
    private String phone_number;
    private String note;

    public Feedback() {
    }

    public Feedback(int id, int user_id, String fullname, String email, String phone_number, String note) {
        this.id = id;
        this.user_id = user_id;
        this.fullname = fullname;
        this.email = email;
        this.phone_number = phone_number;
        this.note = note;
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

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
}
