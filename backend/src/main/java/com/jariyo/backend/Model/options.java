package com.jariyo.backend.Model;

public class options {
    private int id;
    private String title;
    private int price;

    public options(int id, String title, int price)
        {
            super();
            this.id = id;
            this.title = title;
            this.price = price;
            
    }

    public int getId(){
        return id;
    }
    public void setId(int id){
        this.id = id;
    }

    public String getTitle(){
        return title;
    }
    public void setTitle(String title){
        this.title = title;
    }

    public int getPrice(){
        return price;
    }
    public void setPrice(int price){
        this.price = price;
    }
}
