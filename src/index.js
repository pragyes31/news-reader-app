import "./styles.css";
// API : https://newsapi.org/v2/top-headlines&apiKey=2043fa143b224d2b8f1057943e2557f7
// API key: 2043fa143b224d2b8f1057943e2557f7

function buildNewsApp() {
  const newsArticlesDiv = document.querySelectorAll("#news-articles");
  const filtersDiv = document.querySelector(".filters");
  const newsApp = {
    populateNewsArticles: function() {
      fetch(
        "https://newsapi.org/v2/everything?q=justin&apiKey=2043fa143b224d2b8f1057943e2557f7"
      )
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log(data);
          data.articles.forEach(article => {
            let newsArticleDiv = document.createElement("div");
            let newsHeaderDiv = document.createElement("header");
            newsArticleDiv.className = "news-article";
            newsHeaderDiv.className = "news-title";
          });
        });
    }
  };
  newsApp.populateNewsArticles();
  return newsApp;
}

const newsApp = buildNewsApp();
