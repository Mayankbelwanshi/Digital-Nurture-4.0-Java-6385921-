import java.util.Scanner;

public class Finance {
    public static double futureValue(double presentValue, double rate, int years) {
        if(years ==0){
            return presentValue;
        }
        return (1+rate) * futureValue(presentValue, rate, years - 1);
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while(true){
            System.out.print("Enter present value (or 'exit' to quit): ");
            String input = sc.nextLine();
            if(input.equalsIgnoreCase("exit")) {
                break;
            }
            double presentValue = Double.parseDouble(input);
            
            System.out.print("Enter annual interest rate (as a decimal): ");
            double rate = sc.nextDouble();
            
            System.out.print("Enter number of years: ");
            int years = sc.nextInt();
            sc.nextLine();
            if (years < 0) {
                System.out.println("Number of years cannot be negative. Please try again.");
                continue;
            }
            double futureValue = futureValue(presentValue, rate, years);
            System.out.printf("Future Value: %.2f%n", futureValue);
        }
        sc.close();
    }
}
