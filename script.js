// 1. Search products
// 2. Category filtering
// 3. Add to cart
// 4. Cart quantity + total

let cards =[];

let search = document.querySelector("#searchbar input");
search.addEventListener("input" , function(){
    let filter = cards.filter(function(card){
        return card.namee.startsWith(search.value);
    })
})