var products = localStorage.getItem("products");


function getDetails() {
    
    if(products){
    products=JSON.parse(products)
    var body = document.getElementById("add")
    
    
    for (i = 0; i < products.length; i++) {
        body.innerHTML +=
            `<tr><th scope='row'>${i+1}</th>
            <td>${products[i].name}</td><td>${products[i].unit}</td>
            <td>${products[i].price}</td><td>${products[i].desc}</td>
            <td><button class="btn btn-primary" onclick="edit(${i})" style="border-radius:10px;">Edit</button></td>
            <td><button class="btn btn-primary" onclick="deleteProduct(${i})" style="border-radius:10px;">Delete</button></td></tr>`
    }
}
}
function edit(num){
    var para = new URLSearchParams();
    para.append("id", num)
    location.href = "index.html?" + para.toString();

}
function deleteProduct(num){
    console.log(num)
    // var products = JSON.parse(localStorage.getItem("products"));
    products.splice(num,1)
    localStorage.setItem("products",JSON.stringify(products))
    location.reload()
}

