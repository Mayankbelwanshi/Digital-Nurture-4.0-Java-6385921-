import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import './App.css';

const App = () => {
  const [view, setView] = useState("book");
  const items = ["React", "JavaScript", "Node"];

  const renderComponent = () => {
    switch(view) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blogger App</h1>

      <div>
        <button onClick={() => setView('book')}>Show Book</button>
        <button onClick={() => setView('blog')}>Show Blog</button>
        <button onClick={() => setView('course')}>Show Course</button>
        <button onClick={() => setView('none')}>Clear</button>
      </div>

      <hr />

      {view === "book" && <p>Viewing Book Details</p>}

      <p>
        {view === "blog"
          ? "You're viewing a blog"
          : view === "course"
          ? "You're viewing a course"
          : "Choose something to display"}
      </p>

      {renderComponent()}

      <hr />

      <h3>Tech Tags:</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>#{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;