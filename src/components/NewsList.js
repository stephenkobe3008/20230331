import React from "react";

function NewsList({ news = [] }) {
  return (
    <div className="news-list">
      {news.map((article) => (
        <div key={article.title} className="news-item">
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a href={article.url}>Read More</a>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
