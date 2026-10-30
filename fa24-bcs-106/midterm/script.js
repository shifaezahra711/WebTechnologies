// Get search box
const searchBox = document.querySelector(".search-input");

// Get all product cards
const products = document.querySelectorAll(".product-card");

// Get shop
const shop = document.querySelector(".shop");

// Get sort button
const sortBtn = document.querySelector("#sortBtn");

// Get no products message
const noProducts = document.querySelector("#noProducts");

// Sort order
let lowToHigh = true;


// SEARCH PRODUCTS

searchBox.addEventListener("input", function () {

    const searchText = searchBox.value.toLowerCase();

    let found = 0;

    products.forEach(function (product) {

        const name = product.querySelector("h3").textContent.toLowerCase();

        if (name.includes(searchText)) {
            product.style.display = "";
            found++;
        } else {
            product.style.display = "none";
        }

    });

    if (found === 0) {
        noProducts.style.display = "block";
    } else {
        noProducts.style.display = "none";
    }

});


// SORT PRODUCTS

sortBtn.addEventListener("click", function () {

    const productArray = Array.from(shop.children);

    productArray.sort(function (a, b) {

        const priceA = parseFloat(
            a.querySelector(".price").textContent.replace("$", "")
        );

        const priceB = parseFloat(
            b.querySelector(".price").textContent.replace("$", "")
        );

        if (lowToHigh) {
            return priceA - priceB;
        } else {
            return priceB - priceA;
        }

    });

    productArray.forEach(function (product) {
        shop.appendChild(product);
    });

    lowToHigh = !lowToHigh;

});


// PREMIUM PRODUCTS

products.forEach(function (product) {

    const price = parseFloat(
        product.querySelector(".price").textContent.replace("$", "")
    );

    if (price > 600) {

        const label = document.createElement("span");

        label.textContent = "Premium";

        label.className = "premium";

        product.prepend(label);
    }

});