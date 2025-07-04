import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import articleoneimage from "../../../assets/Articleone.jpeg";
import bitcoin from "../../../assets/bitcoin.jpeg";
import ledgersandwalletarticle from "../../../assets/ledgersandwallet.jpeg"
import blockchainarticle from "../../../assets/blockchainarticle.jpeg"
import community from "../../../assets/lead.jpg"



const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Inaugural Event: Women Bitcoin Club Empowers Women in Bitcoin",
      date: "January 22, 2025",
      image: articleoneimage,
      content: "On March 16, 2024, the Women Bitcoin Club successfully hosted its inaugural event..."
    },
    {
      id: 2,
      title: "Bitcoin 101 - A Beginner's Guide ",
      date: "January 22, 2025",
      image: bitcoin,
      content: "This is the content for Article 2."
    },
    {
      id: 3,
      title: "Blockchains and Legders",
      date: "January 22, 2025",
      image: blockchainarticle ,
      content: "This is the content for Article 2."
    },
    {
      id: 4,
      title: "Bitcoin 102 - A Beginner's Guide",
      date: "January 22, 2025",
      image: bitcoin,
      content: "This is the content for Article 2."
    },
    {
      id: 5,
      title: "Wallets, Tokens and the Cryptoverse",
      date: "January 22, 2025",
      image: ledgersandwalletarticle,
      content: "This is the content for Article 2."
    },
    {
      id: 6,
      title: "Do I really need A Tech Community",
      date: "January 22, 2025",
      image: community,
      content: "This is the content for Article 2."
    }
  ];

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
