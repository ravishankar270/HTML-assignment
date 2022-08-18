const a = document.getElementById("submit")

a.addEventListener('click', addProduct)


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
    var para = new URLSearchParams(window.location.search);
    var id = +para.get("id");
    if (product == "") {
        alert("name is missing")
    } else if (unit == "") {
        alert("unit is missing")
    } else if (price == "") {
        alert("price is missing")
    } else if (desc == "") {
        alert("desc is missing")
    } else {
        let products = localStorage.getItem("products")
        if (products == null) {
            products = [new Product(product, unit, price, desc)]
            localStorage.setItem("products", JSON.stringify(products));
        } else {
            products = JSON.parse(localStorage.getItem("products"))
            if(id!=null){
              products[id].name=document.getElementById("productname").value
              products[id].unit=document.getElementById("unit").value
              products[id].price=document.getElementById("price").value
              products[id].desc=document.getElementById("desc").value
              console.log(document.getElementById("productname").value)

            }else{
            products.push(new Product(product, unit, price, desc))
            }
            localStorage.setItem("products", JSON.stringify(products));
        }

        window.location.href = "detailspage.html";


        console.log(products);
    }
}

function checkEdit() {
    var para = new URLSearchParams(window.location.search);
    var id = para.get("id");
    console.log(id)
    if(id){
    let products = localStorage.getItem("products")
    if (products != null) {
        products = JSON.parse(localStorage.getItem("products"))
        id=Number(id)
        document.getElementById("productname").value=products[id].name
        document.getElementById("unit").value=products[id].unit
        document.getElementById("price").value=products[id].price
        document.getElementById("desc").value=products[id].desc
    }else{
        alert("not able to edit")
    }
}
    
}