const cartItems = [
    { item: "T-Shirt",  price:599,  quantity: 2, category: "Apparel" },
    { item: "Jeans",    price:1899, quantity: 1, category: "Apparel" },
    { item: "Shoes",    price:899,  quantity: 1, category: "Apparel" },
    { item: "Socks",    price:49,   quantity: 3, category: "Apparel" },
];

let cartValue = 0;
cartItems.forEach((item) => {cartValue += item.price})
console.log(cartValue) 
