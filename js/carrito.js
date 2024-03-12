




let totalPrice = 0;
let productDetails = [];
let totalCart = document.getElementById("preuFinal");

//function onclick()
function buy(name, price, unit) {

  let promptClg = Number(prompt(`How many ${name} do you want?`)); //PROMPT FOR CUSTOMER INTRODUCE THE AMOUNT THEY WANT
  
  if (!isNaN(promptClg)) {
    let total = price * promptClg; // STORING IN A VARIABLE THE AMOUNT FROM CUSTOMER * PRICE
    totalPrice += total;

    let result = total.toFixed(2); // USING FIXED(2) >>> ,00
    totalCart.innerHTML = totalPrice.toFixed(2);

    const product = {
      id: new Date().getTime(),
      description: name,
      quantity: promptClg,
      price: price,
      //  total: total.toFixed(2)
    };

    productDetails.push(product);//here i create a array with every product that are add to the cart
    
    let cardContent = document.getElementById("carrito");
    let elementId = product.id;
//console.log(cardContent)

    cardContent.innerHTML += `<p class="carrito" id="${elementId}">
   <i class="fa-solid fa-trash-can ${elementId}"></i>${name} ${price} x <span class="qtd">${promptClg}</span>${unit} = <span class="result">${result}</span>€${unit}</p>`;
    //cardContent.innerHTML += ``;
    
  } else if (promptClg === 0) {
     return alert("only numbers 0-9")
  }

for (let i = 0; i < productDetails.length; i++) {
  let compra = productDetails[i].id;
}
//console.log("compra", productDetails)
const removeProducBtn = document.getElementsByClassName('fa-solid'); //creating a new const for storing the line that i create every time when o select a product
//console.log("working:",removeProducBtn); // I can see which btn I select 
for (let i = 0; i < removeProducBtn.length; i++) { // for
    removeProducBtn[i].addEventListener('click', (event) => {
        event.target.parentElement.remove()
        upDate()
    })
    
}

}
//function to remove the line from the HTML
function upDate(){
const cartProducts = document.getElementsByClassName('carrito');
for (let i = 0; i < cartProducts.length; i++) {
    //console.log(cartProducts[i])
    const productPrice = Number(cartProducts[i].getElementsByClassName('result')[0].innerText)
    const productQtd = cartProducts[i].getElementsByClassName('qtd')[0].innerText;
    console.log(typeof productPrice)
}

}