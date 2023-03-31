const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "";

export async function getTopHeadlines() {
  const response = await fetch(
    `${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`
  );
  const data = await response.json();
  if (data.status !== "ok") {
    throw new Error(data.message);
  }
  return data.articles;
}

export async function searchNews(query) {
  const response = await fetch(
    `${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`
  );
  const data = await response.json();
  if (data.status !== "ok") {
    throw new Error(data.message);
  }
  return data.articles;
}
