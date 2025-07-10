import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import articles from './Articles'; // import from the file you just created

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-grid">
        {articles.map((article) => (
          <div key={article.id} className="blog-card">
            <Link to={`/article/${article.id}`}>
              <h4 id="blog-title-small">{article.title}</h4>
            </Link>
            <p className="blog-date">{article.date}</p>
            <img src={article.image} alt={article.title} className="blogpage-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
