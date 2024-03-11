let totalPrice = 0;
let productDetails = [];
function buy(name, price, unit) {
  const product = new Object();
  product.id = new Date().getTime();
  product.description = `${name}`;
  productDetails.push(product);

  for (let i = 0; i < productDetails.length; i++) {
        console.log("productId:", productDetails[i].id, productDetails[i].description);
  }

  let promptClg = Number(prompt(`How many ${name} do you want?`)); //PROMPT FOR CUSTOMER INTRODUCE THE AMOUNT THEY WANT
  let total = price * promptClg; // STORING IN A VARIABLE THE AMOUNT FROM CUSTOMER * PRICE
  let result = total.toFixed(2); // USING FIXED(2) >>> ,00

  totalPrice += total;

  let cardContent = document.getElementById("carrito");
  let elementId = product.id;
  console.log(elementId)
  cardContent.innerHTML += `<span id="${elementId}">`;
  cardContent.innerHTML += `<i class="fa-solid fa-trash-can" id="borrar" onclick="removeEl('${elementId}')"></i>${name} ${price} x ${promptClg}${unit} = ${result}€${unit}`;
  cardContent.innerHTML += `</span>`;
  let totalCart = document.getElementById("preuFinal");
  totalCart.innerHTML = totalPrice.toFixed(2);
  //console.log(totalCart)

}
///function to delete
function removeEl(elementId) {
  let productId = document.getElementById(elementId);
  if (productId) {
    console.log("test")
    productId.remove();
  } else {
    console.log("Element not found:", elementId);
  }
}

/*
Hay que programar un carrito de compra de fruta.

El cliente eligirá que fruta quiere haciendo click sobre la imagen.
Un mensaje emergente le preguntará qué cantidad quiere.

Esta información se mostrará a la derecha, bajo "Total carrito", 
en <p id="carrito"></p>, de esta forma:
 Kiwi 2 kg x 4,20€/kg = 8,40 €

El total se actualizará con cada compra
Total Compra: 8,40€

Se dará la opción de añadir o no más productos que se mostrarán
a continuación de los anteriores, y se sumará todo en el total. 
Por ejemplo:  
Kiwi 2 kg x 4, 20€/kg = 8, 40€
Pomelo 1 kg x 2,50€/kg = 2,50€
Total Compra: 10,90€

Puedes modificar el código facilitado si ello te ayuda con el ejercicio,
pero deberás justificarlo.

Recuerda la importancia comentar con detalle el código.

Lo importante es el cálculo, no los estilos css
 */



    //FIRST TRY
    /* 
    const newFruits = []; // here i have a array with all the names and price
    const card = document.querySelectorAll('.card');
    const addToCart = document.querySelectorAll('.card > p');
    for (let i = 0; i < addToCart.length; i++) {
        console.log("addToCart",addToCart[i].textContent);
        newFruits.push(addToCart[i].textContent)  
    }
    
    const allProducts = [];
    for (let i = 0; i < newFruits.length; i++) {
        let priceString = newFruits[i].split(": ")[0]; 
        allProducts.push(priceString);
    }
    
    console.log("allproducts:", allProducts)
     
    
     const dividedFruits = [];
    
    // Iterate over the allProducts using a for loop
    for (let i = 0; i < allProducts.length; i++) {
        // Trim the fruit name to remove any leading or trailing whitespace
        const trimmedFruit = allProducts[i].trim();
        console.log(trimmedFruit)
        dividedFruits.push(trimmedFruit)
    
    }
    console.log("this", dividedFruits) 
    
    // Now, dividedFruits object will contain arrays divided by each fruit
    
    //console.log("working", findValue)
    //console.log("working",allProducts[i])
    //function to be actived when start click
     let clickOn = document.addEventListener('click', function(){
    
         for (let i = 0; i < card.length; i++) {
            console.log("teste", card[i]);
             //console.log(addToCart[9])
         }
         const product = new Object();
    product.id = new Date().getTime();
    
    console.log("working",product.id);
    })
    
    console.log(clickOn)
    // function for display in the cart
    
    //console.log(loop)
    //const newCart = document.classList.add('cart');
    */