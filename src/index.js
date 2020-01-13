import "./styles.css";
// API : https://newsapi.org/v2/top-headlines&apiKey=2043fa143b224d2b8f1057943e2557f7
// API key: 2043fa143b224d2b8f1057943e2557f7

function buildNewsApp() {
  const newsArticlesDiv = document.querySelector("#news-articles");
  const countrySelector = document.querySelector("#select-country");
  const categorySelector = document.querySelector("#select-category");
  const newsCategory = document.querySelectorAll(".news-category");
  const everythingFilter = document.querySelector("#everything-filter");
  const topHealinesFilter = document.querySelector("#top-healines-filter");
  const getEverythingBtn = document.querySelector("#get-everything");
  const getTopHeadlinesBtn = document.querySelector("#get-top-headlines");
  const errorMessage = document.querySelector("#error-message");
  const sortBy = document.querySelector("#sort-by");
  const newsAPIKey = "apiKey=2043fa143b224d2b8f1057943e2557f7";
  const newsApp = {
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
      readMoreLink.innerHTML = "Read more";
      readMoreLink.href = articleLink;
      readMoreLink.setAttribute("target", "_blank");
    },
    populateNewsArticles: function(newsUrl) {
      fetch(newsUrl)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          data.articles.forEach(article => {
            let jsonDate = article.publishedAt;
            let date = new Date(jsonDate);
            newsApp.createNewsArticleDiv(
              article.title,
              date,
              article.description,
              article.url
            );
          });
        });
    },
    switchTabs: function(e) {
      newsCategory.forEach(category => {
        category.classList.remove("active-news-category");
      });
      e.target.className += " active-news-category";
      newsApp.showAndHide(e);
    },
    showAndHide: function(e) {
      if (e.target.id === "everything") {
        topHealinesFilter.style.display = "none";
        everythingFilter.style.display = "block";
      } else {
        topHealinesFilter.style.display = "block";
        everythingFilter.style.display = "none";
      }
    },
    getEverythingNews: function(e) {
      e.preventDefault();
      let keyword = document.querySelector("#search-by-keyword").value;
      let everythingEntryPoint = "https://newsapi.org/v2/everything";
      let sortByValue = sortBy.options[sortBy.selectedIndex].value;
      console.log(
        sortByValue,
        `${everythingEntryPoint}?q=${keyword}&sortBy=${sortByValue}&${newsAPIKey}`
      );
      if (keyword) {
        newsArticlesDiv.innerHTML = "";
        newsApp.populateNewsArticles(
          `${everythingEntryPoint}?q=${keyword}&sortBy=${sortByValue}&${newsAPIKey}`
        );
        errorMessage.innerHTML = "";
      } else {
        errorMessage.innerHTML =
          "Please enter atleast one word to continue the search";
      }
    },
    getTopHeadlines: function(e) {
      e.preventDefault();
      let selectedCountry =
        countrySelector.options[countrySelector.selectedIndex].value === ""
          ? ""
          : `&country=${
              countrySelector.options[countrySelector.selectedIndex].value
            }`;
      let selectedCategory =
        categorySelector.options[categorySelector.selectedIndex].value === ""
          ? ""
          : `&category=${
              categorySelector.options[categorySelector.selectedIndex].value
            }`;
      let topHeadlinesEntryPoint = "https://newsapi.org/v2/top-headlines";
      let newsUrl = `${topHeadlinesEntryPoint}?q=${selectedCountry}${selectedCategory}&${newsAPIKey}`;
      newsArticlesDiv.innerHTML = "";
      newsApp.populateNewsArticles(newsUrl);
    }
  };
  newsApp.populateNewsArticles(
    "https://newsapi.org/v2/everything?q=javascript&apiKey=2043fa143b224d2b8f1057943e2557f7 "
  );
  getEverythingBtn.addEventListener("click", newsApp.getEverythingNews);
  getTopHeadlinesBtn.addEventListener("click", newsApp.getTopHeadlines);
  newsCategory.forEach(category => {
    category.addEventListener("click", newsApp.switchTabs);
  });
  return newsApp;
}

const newsApp = buildNewsApp();
