package com.mortgage;

import java.util.Scanner;

public interface ConsoleInfo
{
    Scanner scanner=new Scanner(System.in);
    static double readNumber(String prompt, double min, double max)
    {

        double value;
        while (true)
        {
            System.out.println(prompt);
            value = scanner.nextFloat();
            if (value >= min && value <= max)
                break;
            System.out.println("Enter a value between " + min + " to " + max);
        }
        return value;
    }


}
