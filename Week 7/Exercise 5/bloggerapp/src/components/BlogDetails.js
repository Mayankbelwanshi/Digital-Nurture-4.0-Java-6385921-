import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { id: 1, title: 'Understanding React Hooks', author: 'Jane Doe' },
    { id: 2, title: 'JavaScript Promises Explained', author: 'David Smith' },
    { id: 3, title: 'Async/Await in Depth', author: 'Emily Johnson' },
  ];

  return (
    <div>
      <h2 className="section-title">Blog Details</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className="card">
          <p><strong>Title:</strong> {blog.title}</p>
          <p><strong>Author:</strong> {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
