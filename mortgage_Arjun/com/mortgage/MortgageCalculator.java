package com.mortgage;

public class MortgageCalculator implements MortageInfo
{

    private int principal;
    private float annualInterest;
    private byte years;


    public MortgageCalculator(int principal, float annualInterest, byte years)
    {
        this.principal = principal;
        this.annualInterest = annualInterest;
        this.years = years;
    }



    public double calculateBalance( short numberOfPaymentsMade )
    {
        // calculate the balance
        float monthlyInterest = getMonthlyInterest();
        float numberOfPayments = getNumberOfPayments();

        double balance = principal
                * (Math.pow(1 + monthlyInterest, numberOfPayments) - Math.pow(1 + monthlyInterest, numberOfPaymentsMade))
                / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

        return balance;
    }

    public double calculateMortgate() {
        //To calculate the Mortgage
        float monthlyInterest = getMonthlyInterest();
        float numberOfPayments = getNumberOfPayments();

        double mortgage = principal
                * (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments))
                / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);
        return mortgage;
    }

    public double[] getRemainingBalance()
    {//To get the remaining Balance
        var balances = new double[getNumberOfPayments()];
        for ( short month = 1; month <= balances.length; month++){
            balances[month-1] = calculateBalance(month);
        }
        return balances;
    }

    public int getNumberOfPayments()
    {
        return years * MONTHS_IN_YEAR;
    }

    public float getMonthlyInterest()
    {
        return annualInterest / PERCENT / MONTHS_IN_YEAR;
    }
}
