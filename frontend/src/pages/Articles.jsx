import React from "react";
import "./styles/articles.css";
import article1 from "../assets/Images/article-image.jpg";
import '../global.css'

const articlePdf1 = "./pdfs/article1.pdf";
const articlePdf2 = "./pdfs/article2.pdf";
const articlePdf3 = "./pdfs/article3.pdf";

const Articles = () => {
  const openPdf = (pdf) => {
    window.open(pdf, "_blank");
  };
  return (
    <div className="article-page">
      <div className="gradient-background">
        <div className="articles-header">
          <h2>Articles</h2>
        </div>
        <div className="article-card">
          <img src={article1} alt="Article" />
          <button onClick={() => openPdf(articlePdf1)}>Open</button>
        </div>
        <div className="article-card">
          <img src={article1} alt="Article" />
          <button onClick={() => openPdf(articlePdf1)}>Open</button>
        </div>
        <div className="article-card">
          <img src={article1} alt="Article" />
          <button onClick={() => openPdf(articlePdf2)}>Open</button>
        </div>
        <div className="article-card">
          <img src={article1} alt="Article" />
          <button onClick={() => openPdf(articlePdf3)}>Open</button>
        </div>
        <div className="article-card">
          <img src={article1} alt="Article" />
          <button onClick={() => openPdf(articlePdf3)}>Open</button>
        </div>
        <div className="article-card">
          <img src={article1} alt="Article" />
          <button onClick={() => openPdf(articlePdf3)}>Open</button>
        </div>
        <div className="article-card">
          <img src={article1} alt="Article" />
          <button onClick={() => openPdf(articlePdf3)}>Open</button>
        </div>
        <div className="article-card">
          <img src={article1} alt="Article" />
          <button onClick={() => openPdf(articlePdf3)}>Open</button>
        </div>
      </div>
    </div>
  );
};

export default Articles;
