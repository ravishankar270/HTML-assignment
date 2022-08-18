const a = document.getElementById("submit")


var products = []
localStorage.setItem("products",JSON.stringify(products))
if(a){
a.addEventListener('click', addProduct)
}

function Product(name, unit, price, desc) {

    this.name = name
    this.unit = unit
    this.price = price
    this.desc = desc

}


function addProduct() {
    var product = document.getElementById("productname").value
    var unit = document.getElementById("unit").value
    var price = document.getElementById("price").value
    var desc = document.getElementById("desc").value
    if (product == "") {
        alert("name is missing")
    } else if (unit == "") {
        alert("unit is missing")
    } else if (price == "") {
        alert("price is missing")
    } else if (desc == "") {
        alert("desc is missing")
    } else {
        products=JSON.parse(localStorage.getItem("products"))
        products.push(new Product(product, unit, price, desc))
        localStorage.setItem("products",JSON.stringify(products));
        
        window.location.href = "detailspage.html";


        console.log(products);
    }
}
