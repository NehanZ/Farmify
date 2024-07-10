import React from "react";
import "./styles/CommunityPage.css";
import articlei from "./Images/article-image.jpg";
import feedImage1 from "./Images/Feed1.jpeg";
import feedImage2 from "./Images/Feed2.jpeg";
import feedImage3 from "./Images/Feed3.jpeg";
import feedImage4 from "./Images/Feed4.jpeg";
import feedImage5 from "./Images/Feed5.jpeg";
import feedImage6 from "./Images/Feed6.jpeg";
import feedImage7 from "./Images/Feed7.jpeg";
import feedImage8 from "./Images/Feed8.jpeg";
import feedImage9 from "./Images/feed9.jpeg";
import feedImage10 from "./Images/feed10.jpeg";

// Array of PDF file paths for the articles
const articlePdf1 = "./pdfs/article1.pdf";
const articlePdf2 = "./pdfs/article2.pdf";
const articlePdf3 = "./pdfs/article3.pdf";
const articlepage ="./Articles.jsx"

const CommunityPage = () => {
  const openPdf = (pdf) => {
    window.open(pdf, '_blank');
  };
  return (
    <div className="community-page">
      <section className="articles">
        <section className="gradient-background">
          <div className="articles-header">
            <h2>Articles</h2>
            <button onClick={articlepage} className="see-more">More</button>
          </div>
          <div className="article-list">
            <div className="article-card">
              <img src={articlei} alt="Article" />
              <button onClick={() => openPdf(articlePdf1)}>Open</button>
            </div>
            <div className="article-card">
              <img src={articlei} alt="Article" />
              <button onClick={() => openPdf(articlePdf1)}>Open</button>
            </div>
            <div className="article-card">
              <img src={articlei} alt="Article" />
              <button onClick={() => openPdf(articlePdf2)}>Open</button>
            </div>
            <div className="article-card">
              <img src={articlei} alt="Article" />
              <button onClick={() => openPdf(articlePdf3)}>Open</button>
            </div>
          </div>
        </section>
      </section>
      <div className="community-page2">
        <section className="forum">
          <div className="forum-header">
            <h2>Forum</h2>
            <button className="see-more2">More</button>
          </div>
          <div className="forum-list">
            {[
              {
                question: "How to plant coconut trees in wet areas?",
                replies: 9,
                views: 36,
                time: "8 hours ago",
                user: "Farmer_1",
              },
              {
                question:
                  "Is there any ways to plant strawberries in dry areas like Kurunegala",
                replies: 6,
                views: 50,
                time: "16 hours ago",
                user: "Farmer_2",
              },
              {
                question:
                  "What do you do if your beetle plantation is filled with spores",
                replies: 21,
                views: 128,
                time: "1 day ago",
                user: "Farmer_3",
              },
              {
                question:
                  "Is there any ways to control insects without using pesticides for paddy",
                replies: 15,
                views: 104,
                time: "4 days ago",
                user: "Farmer_4",
              },
            ].map((post, index) => (
              <div className="forum-post" key={index}>
                <div className="forum-details">
                  <p>
                    <strong>{post.question}</strong>
                  </p>
                  <p>
                    By {post.user}, <small>{post.time}</small>
                  </p>
                </div>
                <div className="forum-stats">
                  <p>
                    <span>{post.replies} Replies</span>
                    <span>{post.views} Views</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="community-page2">
        <section className="feed">
          <div className="forum-header">
            <h2>Feed</h2>
            <button className="see-more2">More</button>
          </div>
          <div className="feed-grid">
            <img onClick={feedImage1} src={feedImage1} alt="Feed 1" />
            <img src={feedImage2} alt="Feed 2" />
            <img src={feedImage3} alt="Feed 3" />
            <img src={feedImage4} alt="Feed 4" />
            <img src={feedImage5} alt="Feed 5" />
            <img src={feedImage6} alt="Feed 6" />
            <img src={feedImage7} alt="Feed 7" />
            <img src={feedImage8} alt="Feed 8" />
            <img src={feedImage9} alt="Feed 9" />
            <img src={feedImage10} alt="Feed 10" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommunityPage;
