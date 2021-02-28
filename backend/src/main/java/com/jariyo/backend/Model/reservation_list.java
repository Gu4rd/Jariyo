package com.jariyo.backend.Model;

public class reservation_list {
    private int product_id;
    private String user_id;
    private String title;
    private String detailed_location;
    private int price;
    private String period;

    public reservation_list(int product_id, String user_id, String title, String detailed_location, int price, String period)
        {
            super();
            this.product_id = product_id;
            this.user_id = user_id;
            this.title = title;
            this.detailed_location = detailed_location;
            this.price = price;
            this.period = period;
            
    }

    public int getProduct_id(){
        return product_id;
    }
    public void setProduct_id(int product_id){
        this.product_id = product_id;
    }

    public String getUser_id(){
        return user_id;
    }
    public void setUser_id(String user_id){
        this.user_id = user_id;
    }

    public String getTitle(){
        return title;
    }
    public void setTitle(String title){
        this.title = title;
    }   

    public String getDetailed_location(){
        return detailed_location;
    }
    public void setDetailed_location(String detailed_location){
        this.detailed_location = detailed_location;
    }   

    public int getPrice(){
        return price;
    }
    public void setPrice(int price){
        this.price = price;
    }   

    public String getPeriod(){
        return period;
    }
    public void setPeriod(String period){
        this.period = period;
    }
}
