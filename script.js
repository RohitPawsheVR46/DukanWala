// 1. Search products
// 2. Category filtering DONE..
// 3. Add to cart
// 4. Cart quantity + total
let itemss_prducts = document.querySelector("#itemss");
let search = document.querySelector("#searchbar input");
let additems_btn = document.querySelector("#add-items");
let form = document.querySelector("#product-form");
let form_closebtn = document.querySelector("#closebtn");

let vegetablesAndFruits = document.querySelector("#vegetables");
let drinks = document.querySelector("#drinks");
let bakery = document.querySelector("#bakery");
let dairy = document.querySelector("#dairy");
let nonveg = document.querySelector("#nonveg");
let personal = document.querySelector("#personal");
let ChipsAndnamkeen = document.querySelector("#namkeen");
let instantFoods = document.querySelector("#instant");
let icecreams = document.querySelector("#icecream");
let saucesAndSpreads = document.querySelector("#sauce");
let skincare = document.querySelector("#skincare");
let healthAndPharma = document.querySelector("#health");

let products = JSON.parse(localStorage.getItem("products")) || {
    vegiandfri: [],
    drinks: [],
    diary: [],
    bakery: [],
    nonveg: [],
    namkeen: [],
    instant: [],
    icecreams: [],
    sauses: [],
    skincare: [],
    health: [],
}


if (vegetablesAndFruits) {
    vegetablesAndFruits.addEventListener("click", function () {
        window.location.href = "products.html?category=vegiandfri";
    });
}
if (drinks) {
    drinks.addEventListener("click", function () {
        window.location.href = "products.html?category=drinks";
    });
}
if (bakery) {
    bakery.addEventListener("click", function () {
        window.location.href = "products.html?category=bakery";
    });
}
if (dairy) {
    dairy.addEventListener("click", function () {
        window.location.href = "products.html?category=diary";
    });
}
if (nonveg) {
    nonveg.addEventListener("click", function () {
        window.location.href = "products.html?category=nonveg";
    });
}
if (personal) {
    personal.addEventListener("click", function () {
        window.location.href = "products.html?category=skincare";
    });
}
if (ChipsAndnamkeen) {
    ChipsAndnamkeen.addEventListener("click", function () {
        window.location.href = "products.html?category=namkeen";
    });
}
if (instantFoods) {
    instantFoods.addEventListener("click", function () {
        window.location.href = "products.html?category=instant";
    });
}
if (icecreams) {
    icecreams.addEventListener("click", function () {
        window.location.href = "products.html?category=icecreams";
    });
}
if (saucesAndSpreads) {
    saucesAndSpreads.addEventListener("click", function () {
        window.location.href = "products.html?category=sauses";
    });
}
if (skincare) {
    skincare.addEventListener("click", function () {
        window.location.href = "products.html?category=skincare";
    });
}
if (healthAndPharma) {
    healthAndPharma.addEventListener("click", function () {
        window.location.href = "products.html?category=health";
    });
}


if (form) {
    additems_btn.addEventListener("click", function () {
        form.classList.remove("hidee");
    })
    form_closebtn.addEventListener("click", function () {
        form.classList.add("hidee");
    })

    form.addEventListener("submit", function (evt) {
        evt.preventDefault();

        const img = document.querySelector("#product-img").value;
        const namee = document.querySelector("#product-name").value;
        const weight = document.querySelector("#product-weight").value;
        const price = document.querySelector("#product-price").value;

        let params = new URLSearchParams(window.location.search);
        let category = params.get("category");
        console.log("category:", category);
        if (category) {
            products[category].push({
                img,
                namee,
                weight,
                price,
            })
            localStorage.setItem("products", JSON.stringify(products));
            show_products(category);
        }

        form.reset();
    })
}

show_products();
function show_products() {
    let params = new URLSearchParams(window.location.search);
    let category = params.get("category");
    if (category) {

        document.querySelector("#itemss").innerHTML = "";
        products[category].forEach(ele => {
            const item = document.createElement("div");
            item.classList.add("item");

            const image = document.createElement("img");
            image.src = ele.img;
            image.alt = "Curd";

            const details = document.createElement("div");
            details.classList.add("details");

            const itemName = document.createElement("p");
            itemName.classList.add("item-name");
            itemName.textContent = ele.namee;

            const itemWeight = document.createElement("p");
            itemWeight.classList.add("item-weight");
            itemWeight.textContent = ele.weight;

            const itemPrice = document.createElement("p");
            itemPrice.classList.add("item-price");
            itemPrice.textContent = ele.price;

            const addCartButton = document.createElement("button");
            addCartButton.classList.add("add-cart");
            addCartButton.textContent = "Add to cart";

            details.appendChild(itemName);
            details.appendChild(itemWeight);
            details.appendChild(itemPrice);

            item.appendChild(image);
            item.appendChild(details);
            item.appendChild(addCartButton);

            // Add it to an existing container
            document.querySelector("#itemss").appendChild(item);
        });
    }
}

