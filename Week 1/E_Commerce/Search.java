package E_Commerce;

import java.util.Arrays;
import java.util.Comparator;

public class Search {
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
