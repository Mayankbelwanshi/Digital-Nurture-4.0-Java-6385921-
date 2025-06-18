package E_Commerce;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronic"),
            new Product(2, "Mobile", "Electronic"),
            new Product(3, "Chair", "Furniture"),
            new Product(4, "Bed", "Furniture"),
            new Product(5, "Notebook", "Stationery"),
        };

        Product result1 = Search.linearSearch(products, "Chair");
        System.out.println("Linear Search Result: " + result1.toString());

        Product result2 = Search.binarySearch(products, "Shampoo");
        System.out.println("Binary Search Result: " + result2.toString());
    }
}
