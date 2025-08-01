import React from 'react';

const BookDetails = () => {
  const books = [
    { id: 1, title: 'React in Action', author: 'Mark T.', price: '₹499' },
    { id: 2, title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', price: '₹399' },
    { id: 3, title: 'Clean Code', author: 'Robert C. Martin', price: '₹599' },
    { id: 4, title: 'Mastering React', author: 'Willie Nicholas', price: '₹670' }
  ];

  return (
    <div>
      <h2 className="section-title">Book Details</h2>
      {books.map((book) => (
        <div key={book.id} className="card">
          <p><strong>Title:</strong> {book.title}</p>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Price:</strong> {book.price}</p>
        </div>
      ))}
    </div>
  );
};

export default BookDetails;
