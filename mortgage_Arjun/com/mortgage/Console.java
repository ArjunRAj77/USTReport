package com.mortgage;

import java.util.Scanner;

public class Console implements ConsoleInfo
{
    private static Scanner scanner = new Scanner(System.in);

    public static double readNumber(String prompt){
        return scanner.nextDouble();
    }

}
