const products = [
    {
        id: 1,
        name: "Oppo F19z",
        company: "Oppo",
        qnty: 0,
        totalQnty: 12
    },
    {
        id: 2,
        name: "Samsung J8",
        company: "Samsung",
        qnty: 0,
        totalQnty: 15
    },
    {
        id: 3,
        name: "Dell Inspiron 14",
        company: "Dell",
        qnty: 0,
        totalQnty: 10
    },
    {
        id: 4,
        name: "Headphpnes",
        company: "Boat",
        qnty: 0,
        totalQnty: 22
    }
]

// fumction to dislpay list of products
function dislpayProduct() {
    const productParent = document.querySelector('#product-list')

    // the data coming from fetch request, we have to do async and awiat, response should be in array
    // but we will bw using our products data only

    products.forEach((ele) => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<div class = "product" name =${ele.id}><p>${ele.name}</p><br>
        <p>${ele.company}</p><br>
        <p id = "items-quantity">${ele.qnty}</p>

        </div>
        <button id = "add-cart" >Add to Cart</button>`
        // whenever a new product card is created, you have to add functionality of Add to cart on the product button
        let addToCartBtn = productDiv.querySelector('#add-cart')

        addToCartBtn.addEventListener('click', addToCart)
        productParent.appendChild(productDiv)
    })
}

dislpayProduct()

function addToCart(event) {
    let parentDivForCartElement = document.querySelector('#cart-items');
    console.log(parentDivForCartElement.innerHTML);

    // we can add the card where this button add to cart on which we are clicking
    console.log('clicking...', event.target.closest('div'));

    // now store the selected div in variable

    let itemToAdd = event.target.closest('div').querySelector('.product')
    // check if product qnty is less than or equal 
    // check the condition if the qnty is zero then populate whole innerHtml, otherwise only increase qunty and then add
    // we have to increase the qnty also and then then
    let itemQnty = itemToAdd.querySelector('#items-quantity');
    //console.log(itemQnty.textContent);
    itemQnty.textContent = parseInt(itemQnty.textContent) + 1;
    parentDivForCartElement.innerHTML += itemToAdd.innerHTML;

}