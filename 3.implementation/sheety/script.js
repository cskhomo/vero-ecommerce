// const chocolates = 'https://api.sheety.co/f49d308f0aefb77919c5cfb06b9504ed/catalogue/chocolates';
const packsURL = 'https://api.sheety.co/f49d308f0aefb77919c5cfb06b9504ed/catalogue/packs';

async function fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()

    displayData(data.packs);
}

function displayData(itemList) {

    const productList = document.querySelector(".productList");
    productList.innerHTML = '';

    itemList.forEach(item => {
        
        if (item.product && item.description) {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productList.appendChild(productDiv);

            const imageDiv = document.createElement("div");
            imageDiv.classList.add("image");
            productDiv.appendChild(imageDiv);

            const article = document.createElement("article");
            productDiv.appendChild(article);

            const titleDiv = document.createElement("div");
            titleDiv.classList.add("title");
            titleDiv.innerHTML = item.product;
            article.appendChild(titleDiv);

            const descriptionDiv = document.createElement("div");
            descriptionDiv.classList.add("description");
            descriptionDiv.innerHTML = item.description;
            article.appendChild(descriptionDiv);
        }
    });
  
}

fetchData(packsURL);