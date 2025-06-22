import java.util.Arrays;
import java.util.Comparator;

class Product {
    
    private int productId;
    private String productName;
    private String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public int getProductId() {
        return productId;
    }

    public String getProductName() {
        return productName;
    }
    public String getCategory() {
        return category;
    }
    @Override
    public String toString() {
        return "Product ID: " + productId + ", Name: " + productName + ", Category: " + category;
    }
}

class Search {
    public static Product linearSearch(Product[] products, String productName) {
        Product item = new Product(0, "Not Found", "Unknown");
        for (Product product : products) {
            if (product.getProductName().equalsIgnoreCase(productName)) {
                item = product;
            }
        }
        return item;
    }

    public static Product binarySearch(Product[] products, String productName) {
        Arrays.sort(products, Comparator.comparing(Product::getProductName));
        int left = 0;
        int right = products.length - 1;
        Product item = new Product(0, "Not Found", "Unknown");;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            Product midProduct = products[mid];

            if (midProduct.getProductName().equalsIgnoreCase(productName)) {
                item = midProduct;
                break;
            } else if (midProduct.getProductName().compareToIgnoreCase(productName) < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return item;
    }
}

public class E_Commerce {
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
