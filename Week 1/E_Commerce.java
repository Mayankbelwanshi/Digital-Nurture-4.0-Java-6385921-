class Product{
    private int productId;
    private String productName;
    private String category;
    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }
}
public class E_Commerce {
    public static void main(String[] args) {
        Product product = new Product(1, "Laptop", "Electronics");
        System.out.println("Product created: " + product);
    }
}