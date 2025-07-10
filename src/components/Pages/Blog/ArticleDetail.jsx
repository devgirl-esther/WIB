// src/pages/Blog/ArticleDetail.jsx
import { useParams } from "react-router-dom";
import articles from "./Articles";
import './ArticleDetail.css';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((item) => item.id === parseInt(id));

  if (!article) return <p>Article not found.</p>;

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <p className="blog-date">{article.date}</p>
      <img src={article.image} alt={article.title} className="blog-detail-image" />

      {/* Structured article content */}
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
};

export default ArticleDetail;
