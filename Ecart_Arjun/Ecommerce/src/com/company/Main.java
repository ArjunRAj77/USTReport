package com.company;

public class Main {

    public static void main(String[] args) {
	// calling all functions
        welcomeMessage();
        cartDisplay();
        filterDisplay();

    }
    public static void cartDisplay()
    { //Displaying the total items in the cart
        var obj= new ShoppingCart();
        obj.showItems();

    }
    public static void welcomeMessage()
    {
        //Displaying Welcome message
        System.out.println("----------------------------");
        System.out.println("E-Kart E-commerce");
        System.out.println("---------------------------");
    }
    public static void filterDisplay()
    {
        //Calling Filter class
        var product=new FilterItems();
        product.separateOnRating();
        product.separateOnPrice();
        product.separateOnBrand();
        product.priceHightoLow();

    }


}
