
const newsBtn = document.getElementById("newsBtn");
const newsImg = document.getElementById("newsImg");
const author = document.getElementById("author");
const title = document.getElementById("newsTitle");
const description = document.getElementById("description");
const link = document.getElementById("link");

async function fetchData() {
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=acf136c0c8d649df8bb77afe2a6cf994`);
        const jsonData = await response.json();
        
        // console.log(jsonData); // Log the full response to see its structure

        if (jsonData.articles && jsonData.articles.length > 0) {
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
        } else {
            console.error("No articles found in the response.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

newsBtn.addEventListener("click", fetchData);


