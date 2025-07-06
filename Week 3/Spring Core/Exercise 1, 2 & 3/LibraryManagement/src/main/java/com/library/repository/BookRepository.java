package com.library.repository;

public class BookRepository {

    public void save(String bookName) {
        System.out.println("BookRepository: Saving book - " + bookName);
    }

    public void delete(String bookName) {
        System.out.println("BookRepository: Deleting book - " + bookName);
    }
}
