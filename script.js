// 1. Search products
// 2. Category filtering
// 3. Add to cart
// 4. Cart quantity + total

let vegiandfri = [];
let drinks = [];
let diary = [];
let bakery = [];
let nonveg = [];
let namkeen = [];
let instant = [];
let icecreams = [];
let sauses = [];
let skincare = [];
let health = [];

let additems_btn = document.querySelector("#add-items");
let form = document.querySelector("#product-form");
additems_btn.addEventListener("click", function () {
    form.classList.remove("hidee");
})
document.querySelector("#closebtn").addEventListener("click", function () {
    form.classList.add("hidee");
})

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const img = document.querySelector("#product-img").value;
    const name = document.querySelector("#product-name").value;
    const weight = document.querySelector("#product-weight").value;
    const price = document.querySelector("#product-price").value;
    localStorage.setItem("")
})

let itemss_prducts = document.querySelector("#itemss");
document.querySelector("#vegetables").addEventListener("click", () => {
    window.location.href = "products.html";
    itemss_prducts.innerHTML = "";
    vegiandfri.forEach((item) => {

    })
});

let show_products = function () {

}
let search = document.querySelector("#searchbar input");
search.addEventListener("input", function () {
    let filter = cards.filter(function (card) {
        return card.namee.startsWith(search.value);
    })
})