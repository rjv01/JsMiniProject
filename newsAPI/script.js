import { API_KEY } from './config.js';

const newsBtn = document.getElementById("newsBtn");
const newsImg = document.getElementById("newsImg");
const author = document.getElementById("author");
const title = document.getElementById("newsTitle");
const description = document.getElementById("description");
const link = document.getElementById("link");

async function fetchData() {
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=${API_KEY}`);
        const jsonData = await response.json();

        const randomIndex = Math.floor(Math.random() * jsonData.articles.length);
        const article = jsonData.articles[randomIndex];

        author.innerText = `Author: ${article.author}` || "Unknown Author";
        title.innerText = `Title:  ${article.title}` || "No Title Available";
        description.innerText = `Description: ${article.description}` || "No Description Available";
        newsImg.src = article.urlToImage || "";
        newsImg.style.display = article.urlToImage ? "block" : "none";

        link.href = article.url;
        link.style.display = "block";
        link.innerText = "Read Full Article";
    } catch (error) {
        console.error("Error:", error);
    }
}

newsBtn.addEventListener("click", fetchData);


