import "./styles.css";
// API : https://newsapi.org/v2/top-headlines&apiKey=2043fa143b224d2b8f1057943e2557f7
// API key: 2043fa143b224d2b8f1057943e2557f7

function buildNewsApp() {
  const newsArticlesDiv = document.querySelector("#news-articles");
  const filtersDiv = document.querySelector(".filters");
  const newsApp = {
    testPopulateData: function() {
      console.log("pikachu");
      console.log(newsArticlesDiv);
      newsArticlesDiv.innerHTML = "boom";
    },
    createNewsArticleDiv: function(
      header,
      timestamp,
      description,
      articleLink
    ) {
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
      newsArticlesDiv.appendChild(newsArticleDiv);
      newsArticleDiv.appendChild(newsHeaderDiv);
      newsArticleDiv.appendChild(publishDateDiv);
      newsArticleDiv.appendChild(newsDescDiv);
      newsArticleDiv.appendChild(readMoreDiv);
      readMoreDiv.appendChild(readMoreLink);
      newsHeaderDiv.innerHTML = header;
      publishDateDiv.innerHTML = timestamp;
      newsDescDiv.innerHTML = description;
      readMoreDiv.innerHTML = "Read more";
      readMoreLink.href = articleLink;
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
            console.log("boom");
            newsApp.createNewsArticleDiv(
              article.title,
              article.publishedAt,
              article.description,
              article.url
            );
          });
        });
    }
  };
  newsApp.populateNewsArticles();
  // newsApp.createNewsArticleDiv();
  //newsApp.testPopulateData();
  return newsApp;
}

const newsApp = buildNewsApp();
