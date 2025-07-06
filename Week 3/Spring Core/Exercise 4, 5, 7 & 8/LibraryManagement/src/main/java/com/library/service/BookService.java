package com.library.service;
import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;
    private String service;

    public BookService(String serviceName) {
        this.service = serviceName;
        System.out.println("Constructor Injection: serviceName = " + serviceName);
    }

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("Setter Injection: BookRepository injected");
    }

    public void displayBooks() {
        System.out.println("Books from service (" + service + "):");
        bookRepository.getBooks().forEach(System.out::println);
    }
}
