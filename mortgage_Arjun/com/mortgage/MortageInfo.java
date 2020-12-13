package com.mortgage;

public interface MortageInfo
{
    final static byte MONTHS_IN_YEAR = 12;
    final static byte PERCENT = 100;

    double calculateBalance(short payments);
    double calculateMortgate();
    double[] getRemainingBalance();
    int getNumberOfPayments();
    float getMonthlyInterest();

}
