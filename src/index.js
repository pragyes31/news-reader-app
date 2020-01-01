import "./styles.css";
import axios from "axios";
// API : https://newsapi.org/v2/top-headlines&apiKey=2043fa143b224d2b8f1057943e2557f7
// API key: 2043fa143b224d2b8f1057943e2557f7

function buildNewsApp() {
  const newsArticlesDiv = document.querySelectorAll(".news-articles");
  const filtersDiv = document.querySelector(".filters");
  const newsApp = {};
  return newsApp;
}

const newsApp = buildNewsApp();

async function getNewsData() {
  let newsPromise = new Promise((resolve, reject) => {
    return resolve();
  });
  newsPromise.then(data => {});
}
