package com.company;

public class ProductItem
{
    //initialising the most common attributes of the product
private String title;
private String brand;
private int price;
private double rating;

public ProductItem(String title,String brand,int price,double rating)
{
    //Constructor for each item
    this.title=title;
    this.brand=brand;
    this.price=price;
    this.rating=rating;
}

public double getRating()
{
    //To get the rating of the product
    return rating;
}

public String getTitle()
{
    //To get the title of the product
    return title;
}

public String getBrand()
{
    //To get the brand of the product
    return brand;
}

public int getPrice()
{
    //To get the price of the product
    return price;
}
}
