package com.library.repository;
import java.util.Arrays;
import java.util.List;

public class BookRepository {

    public List<String> getBooks() {
        return Arrays.asList("Rich Dad Poor Dad", "The Power of your subconscious mind", "To Kill a Mockingbird");
    }
}