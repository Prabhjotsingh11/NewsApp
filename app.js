const API_KEY = "67f73108d0694c0b96dce2b561e0d6ea";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

function reload() {
    window.location.reload();
}

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json(); // object
    bindDataRecieved(data.articles);
}

function bindDataRecieved(articles) {
    const cardContainer = document.getElementById("cards-container");

    cardContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const date = new Date(article.publishedAt).toLocaleString("en-US", {
            timeZone: "Asia/Jakarta",
        });    
        cardContainer.innerHTML += `
        <div class="card" onclick="openNews('${article.url}')">
            <div class="card-header">
                <img src="${article.urlToImage}" alt="news-image" id="news-img">
            </div>
            <div class="card-content">
            <h6 class="news-source" id="news-source">${article.source.name} · ${date}</h6>
            <h3 id="news-title">${article.title}</h3>
            <p class="news-desc" id="news-desc">${article.description}</p>
            </div>
        </div>`
    });
}

const onNavItemClick = (url) => {
    window.open(url,"_blank");
}

const openNews = (url) => {
    window.open(url,"_blank");
}