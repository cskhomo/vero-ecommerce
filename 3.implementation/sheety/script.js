const packsURL = 'https://api.sheety.co/f49d308f0aefb77919c5cfb06b9504ed/catalogue/packs';

async function fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()

    console.log(data.packs)
    displayData(data.packs);
}

function displayData(itemList) {

    const productDiv = document.querySelector(".product");
    productDiv.innerHTML = '';
}

fetchData(packsURL);