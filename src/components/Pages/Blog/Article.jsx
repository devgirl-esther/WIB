import React from "react";
import { useParams } from "react-router-dom";
import "./Article.css";
import articleoneimage from "../../../assets/Article1.jpeg";
import bitoinIntroductionImage from "../../../assets/bitcoin.jpeg";
import bitcoin from "../../../assets/bitcoin.jpeg";
import ledgersandwalletarticle from "../../../assets/ledgersandwallet.jpeg"
import blockchainarticle from "../../../assets/blockchainarticle.jpeg"
import community from "../../../assets/lead.jpg"


const articles = [
  
  {
    id: 1,
    title: "Inaugural Event: Women Bitcoin Club Empowers Women in Bitcoin",
    date: "March 16, 2024",
    image: articleoneimage,
    content: `On March 16, 2024, the Women Bitcoin Club successfully hosted its inaugural event 
      commemorating International Women's Day at Bambari Crescent, Wuse Zone 7, Abuja.

      The event brought together women from diverse backgrounds to learn about Bitcoin 
      and its ecosystem. The founder of MTWI Financial Services, Mrs. Ifeoluwa Adegoke, delivered a keynote speech 
      on financial literacy, emphasizing the importance of informed financial decision-making.
      
      Ure Utah, CEO of Bridge Synergy, also spoke at the event, highlighting the significance of women's participation 
      in the finance industry.

      The Women Bitcoin Club is dedicated to empowering women to participate fully in the Bitcoin ecosystem. 
      Our mission is to provide education, support, and community to women interested in Bitcoin, promoting 
      financial inclusion and equality.

      The inaugural event marked the beginning of the Women Bitcoin Club's journey to empower women in Bitcoin. 
      By providing a platform for women to learn, connect, and grow, we aim to bridge the gender gap in the Bitcoin space.
      
      The Women Bitcoin Club's inaugural event was a groundbreaking step towards empowering women in Bitcoin. 
      We look forward to seeing the impact of this initiative in the years to come.
    `,
  },
  {
    id: 2,
    title: "Bitcoin 101 - A Beginner's Guide ",
    date: "March 16, 2024",
    image: bitoinIntroductionImage,
    content: `On March 16, 2024, the Women Bitcoin Club successfully hosted its inaugural event 
      commemorating International Women's Day at Bambari Crescent, Wuse Zone 7, Abuja.
      
      The event brought together women from diverse backgrounds to learn about Bitcoin 
      and its ecosystem... (rest of the article)`,
  },
  {
    id: 3,
    title: "Blockchains and Legders",
    date: "March 16, 2024",
    image: blockchainarticle,
    content: `On March 16, 2024, the Women Bitcoin Club successfully hosted its inaugural event 
      commemorating International Women's Day at Bambari Crescent, Wuse Zone 7, Abuja.
      
      The event brought together women from diverse backgrounds to learn about Bitcoin 
      and its ecosystem... (rest of the article)`,
  },
  {
    id: 4,
    title: "Bitcoin 101 - A Beginner's Guide",
    date: "March 16, 2024",
    image: bitcoin,
    content: `On March 16, 2024, the Women Bitcoin Club successfully hosted its inaugural event 
      commemorating International Women's Day at Bambari Crescent, Wuse Zone 7, Abuja.
      
      The event brought together women from diverse backgrounds to learn about Bitcoin 
      and its ecosystem... (rest of the article)`,
  },
  {
    id: 5,
    title: "Wallets, Tokens and the Cryptoverse",
    date: "March 16, 2024",
    image: ledgersandwalletarticle,
    content: `On March 16, 2024, the Women Bitcoin Club successfully hosted its inaugural event 
      commemorating International Women's Day at Bambari Crescent, Wuse Zone 7, Abuja.
      
      The event brought together women from diverse backgrounds to learn about Bitcoin 
      and its ecosystem... (rest of the article)`,
  },{
    id: 6,
    title: "Do I really need A Tech Community",
    date: "March 16, 2024",
    image: community,
    content: `On March 16, 2024, the Women Bitcoin Club successfully hosted its inaugural event 
      commemorating International Women's Day at Bambari Crescent, Wuse Zone 7, Abuja.
      
      The event brought together women from diverse backgrounds to learn about Bitcoin 
      and its ecosystem... (rest of the article)`,
  }
  // Add more articles here
];

const Article = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) return <p>Article not found</p>;

  return (
    <div className="article-container">
      <img src={article.image} alt={article.title} className="article-image" />
      <h1 className="article-title">{article.title}</h1>
      <p className="article-content">{article.content}</p>
    </div>
  );
};

export default Article;
