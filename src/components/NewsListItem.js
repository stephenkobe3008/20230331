import React from "react";

function NewsListItem({ article }) {
  return (
    <div className="news-item">
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url}>Read More</a>
    </div>
  );
}

export default NewsListItem;
