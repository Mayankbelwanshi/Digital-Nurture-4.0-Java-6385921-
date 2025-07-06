package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String name) {
        System.out.println("BookService: Adding book - " + name);
        bookRepository.save(name);
    }

    public void removeBook(String name) {
        System.out.println("BookService: Removing book - " + name);
        bookRepository.delete(name);
    }
}
