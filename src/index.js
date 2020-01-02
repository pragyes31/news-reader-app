import "./styles.css";
// API : https://newsapi.org/v2/top-headlines&apiKey=2043fa143b224d2b8f1057943e2557f7
// API key: 2043fa143b224d2b8f1057943e2557f7

function buildNewsApp() {
  const newsArticlesDiv = document.querySelectorAll("#news-articles");
  const filtersDiv = document.querySelector(".filters");
  const newsApp = {
    createNewsArticle: function() {
      let newsArticleDiv = document.createElement("div");
      let newsHeaderDiv = document.createElement("header");
      let publishDateDiv = document.createElement("div");
      let newsDescDiv = document.createElement("div");
      let readMoreDiv = document.createElement("div");
      let readMoreLink = document.createElement("a");
      newsArticleDiv.className = "news-article";
      newsHeaderDiv.className = "news-title";
      publishDateDiv.className = "date-of-publish";
      newsDescDiv.className = "news-description";
      readMoreDiv.className = "read-more";
      readMoreLink.setAttribute("target", "_blank");
    },
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
            //readMoreLink.href = "https://google.com";
          });
        });
    }
  };
  newsApp.populateNewsArticles();
  return newsApp;
}

const newsApp = buildNewsApp();
