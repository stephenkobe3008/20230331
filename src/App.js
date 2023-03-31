import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import { getTopHeadlines } from "./services/newsApi";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await getTopHeadlines();
      setArticles(response.articles);
    };
    fetchArticles();
  }, []);

  return (
    <div className="container">
      <h1 className="title">News Analysis App</h1>
      <h2 className="subtitle">Top Headlines</h2>
      <NewsList news={news} />
    </div>
  );
}

export default App;
