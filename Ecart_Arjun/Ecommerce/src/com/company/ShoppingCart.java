package com.company;

import java.util.List;

public class ShoppingCart implements ItemFeatures
{
    //The  products  on Shopping site
    List<ProductItem> item = List.of(
            new ProductItem("Harry Potter Box Set: The Complete Collection", "Rowling J.K.", 2669, 4.7),
            new ProductItem("A Game of Thrones: The Story Continues", "Martin George R.R", 2493, 4.7),
            new ProductItem("Fantastic Beasts: The Crimes of Grindelwald", "Rowling J.K.", 452, 4.1),
            new ProductItem("Angels and Demons", "Brown Dan", 349  , 4.2),
            new ProductItem("The Da Vinci Code", "Brown Dan", 259, 4.6),
            new ProductItem("The Lost Symbol", "Brown Dan", 247, 4.5),
            new ProductItem("One Indian Girl", "Bhagat Chetan", 117, 3.9)
);


   public void showItems() {
         // To display the product along with details

       System.out.println("\n-------------------------");
       System.out.println("The Total List of Items");
       System.out.println("--------------------------");
       item.stream()
               .map(ProductItem::getTitle)
               .forEach(name -> System.out.println(name));
       System.out.println("--------------------------");
   }
}

