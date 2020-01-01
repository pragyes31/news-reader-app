import "./styles.css";
// API : https://newsapi.org/v2/top-headlines&apiKey=2043fa143b224d2b8f1057943e2557f7
// API key: 2043fa143b224d2b8f1057943e2557f7

function buildNewsApp() {
  const newsArticlesDiv = document.querySelectorAll(".news-articles");
  const filtersDiv = document.querySelector(".filters");
  const newsApp = {
    getData: function() {
      fetch(
        "https://newsapi.org/v2/everything?q=viratkohli&apiKey=2043fa143b224d2b8f1057943e2557f7"
      )
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log(data);
        });
    }
  };
  newsApp.getData();
  return newsApp;
}

const newsApp = buildNewsApp();
