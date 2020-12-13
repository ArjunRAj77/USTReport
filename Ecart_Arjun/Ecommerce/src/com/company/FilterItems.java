package com.company;

import java.text.NumberFormat;
import java.util.Comparator;

public class FilterItems extends ShoppingCart implements Filterfunctions{
    //Class to execute filtering functions


    public void separateOnRating(){
       //To filter using rating (High to Low)
        System.out.println("-----------------------------------");
        System.out.println("Filtered by Rating :High to Low");
        System.out.println("-----------------------------------");
        item.stream()
                .sorted(Comparator.comparing(ProductItem::getRating).reversed())
                .forEach(productItem-> System.out.println(productItem.getTitle()+"   \t:Rating :"+ productItem.getRating()));
        System.out.println("-----------------------------------\n");
    }



    public void separateOnPrice(){
        //Filtering Price: Low to High
        System.out.println("-----------------------------------");
        System.out.println("Filtered by Price : Low to High");
        System.out.println("-----------------------------------");
        item.stream()
                .sorted(Comparator.comparing(m-> m.getPrice()))
                .forEach(productItem-> System.out.println(productItem.getTitle()+"  \t:Price :"+ NumberFormat.getCurrencyInstance().format(productItem.getPrice())));
        System.out.println("-----------------------------------\n");

    }


    public void separateOnBrand()
    {
        //To separate using the brand.
        System.out.println("-----------------------------------");
        System.out.println("Filtered by brand");
        System.out.println("-----------------------------------");
        item.stream()
                .sorted(Comparator.comparing(m-> m.getBrand()))
                .forEach(m-> System.out.println(m.getTitle()+"  \t:Author :"+m.getBrand()));
        System.out.println("-----------------------------------\n");

    }


    public void priceHightoLow(){

        //Filtering Price: High to Low
        System.out.println("-----------------------------------");
        System.out.println("Filtered by Price");
        System.out.println("-----------------------------------");
        item.stream()
                .sorted(Comparator.comparing(ProductItem::getPrice).reversed())
                .forEach(productItem-> System.out.println(productItem.getTitle()+" \t:Price :"+ NumberFormat.getCurrencyInstance().format(productItem.getPrice())));
        System.out.println("-----------------------------------\n");

    }


}

