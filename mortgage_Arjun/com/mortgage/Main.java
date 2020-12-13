package com.mortgage;

public class Main implements ConsoleInfo
{

    public static void main(String[] args)
    {
        int principal = (int) ConsoleInfo.readNumber("Principal: ", 1000, 10_00_000);
        float annualInterest = (float) ConsoleInfo.readNumber("Annual Interest Rate: ", 1, 30);
        byte years = (byte) ConsoleInfo.readNumber("Period (Years): ", 1, 30);

        var calulator = new MortgageCalculator(principal, annualInterest, years);
        var report = new MortgageReport(calulator);
        report.printMortgage();
        report.printPaymentSchedule();
    }

}