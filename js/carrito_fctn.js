// Initialize variables to keep track of the total price and product details
let totalPrice = 0;
let productDetails = [];

// Get the element where the total price will be displayed
let totalCart = document.getElementById("preuFinal");

// Function to handle buying a product
//calling params (name, price and unit), way more easy to work with then,
//they are reusable
function buy(name, price, unit) {
    // Prompt the user to enter the quantity of the product they want to buy
    let promptQuantity = Number(prompt(`How many ${name} do you want?`));

    // Check if the input is a valid number
    if (!isNaN(promptQuantity)) {
        // Update the total price and display it
        updateTotalAndCart(name, price, unit, promptQuantity); //calling the function with all the params

        // Add the product details to the list
        addToProductDetails(name, price, unit, promptQuantity);

        // Add the product to the cart display
        addProductToCart(name, price, promptQuantity, unit);

        // Attach an event listener to handle removing the product from the cart
        removeProduct();
    } else if (promptQuantity === 0) {
        // Alert the user if they entered 0 as the quantity
        alert("Please enter a valid quantity.");
    }
}

// Function to update the total price and display it
function updateTotalAndCart(price, quantity) {
    let total = price * quantity;  // total is the value of the product * quantity are from promptQuantity
    totalPrice += total;
    totalCart.innerHTML = totalPrice.toFixed(2);
}

// Function to add product details to the Cart
function addToProductDetails(name, price, quantity) {
    const product = {
        id: new Date().getTime(),  //creating a id for each product
        description: name,
        quantity: quantity,
        price: price
    };
    productDetails.push(product);
}

// Function to add a product to the cart display
function addProductToCart(name, price, quantity, unit) {
    let result = (price * quantity).toFixed(2);
    let elementId = new Date().getTime();
    let cardContent = document.getElementById("carrito");

    cardContent.innerHTML += `
        <p class="carrito" id="${elementId}">
            <i class="fa-solid fa-trash-can ${elementId}"></i>
            ${name} ${price} x <span class="qtd">${quantity}</span>${unit} = 
            <span class="result">${result}</span>€${unit}
        </p>`;
}

// Function to attach event listeners for removing products from the cart
function removeProduct() {
    const removeProducBtn = document.getElementsByClassName('fa-solid');
    for (let i = 0; i < removeProducBtn.length; i++) {
        console.log(removeProducBtn[i]) //to check if I'm selecting correct
        removeProducBtn[i].addEventListener('click', (event) => {
            event.target.parentElement.remove(); // with parentElement I'm selecting <p> who is the "Father" of <i> wich has a className 'fa-solid
            upDate(); // Call the function to update the cart after removing a product
        });             //Every time i trigger the red trash this function is called 
    }
}

// Function to update the total price displayed in the cart
function upDate() {
    // Initialize a variable to store the new total price
    let newTotalPrice = 0;
    // Get all the elements in the cart with the class 'carrito'
    const cartProducts = document.getElementsByClassName('carrito');

    // Loop through each product in the cart
    for (let i = 0; i < cartProducts.length; i++) {
        // Extract the product price from the corresponding element
        const productPrice = Number(cartProducts[i].getElementsByClassName('result')[0].innerText); // using Number() to convert to a number
                                                                                                    // so I can compare to the totalPrice for the math every time
                                                                                                    //product are remove need to do (productPrice - totalPrice)
        // Add the product price to the new total price
        newTotalPrice += productPrice;
    }

    // Update the global total price variable with the new total price
    totalPrice = newTotalPrice;

    // Update the displayed total price in the 'preuFinal' element
    totalCart.innerHTML = totalPrice.toFixed(2); //using toFixed() inside of (), you can enter a number of numbers you want after "," or "."
}