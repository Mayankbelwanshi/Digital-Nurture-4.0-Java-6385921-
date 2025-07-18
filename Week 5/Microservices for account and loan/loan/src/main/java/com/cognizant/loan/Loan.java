package com.cognizant.loan;

public class Loan {
    private String number;
    private String type;
    private double loan;
    private int emi;
    private int tenure;

    public Loan(String number, String type, double loan, int emi, int tenure) {
        this.number = number;
        this.type = type;
        this.loan = loan;
        this.emi = emi;
        this.tenure = tenure;
    }

    public String getNumber() {
        return number;
    }

    public String getType() {
        return type;
    }

    public double getLoan() {
        return loan;
    }

    public int getEmi() {
        return emi;
    }

    public int getTenure() {
        return tenure;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setLoan(double loan) {
        this.loan = loan;
    }

    public void setEmi(int emi) {
        this.emi = emi;
    }

    public void setTenure(int tenure) {
        this.tenure = tenure;
    }
}
