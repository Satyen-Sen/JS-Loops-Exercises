const books = [
    { title: "To Kill a Mockingbird",   genre: "Fiction",   author: "Harper Lee",           publishYear: 1960,  price: 299 },
    { title: "The Merchant of Venice",  genre: "Comedy",    author: "William Shakespeare",  publishYear: 1600,  price: 499 },
    { title: "The Great Gatsby",        genre: "Fiction",   author: "F. Scott Fitzgerald",  publishYear: 1925,  price: 649 },
    { title: "Pride and Prejudice",     genre: "Fiction",   author: "Jane Austen",          publishYear: 1813,  price: 249 },
    { title: "Treasure Island",         genre: "Adventure", author: "R. B. Stevenson",      publishYear: 1951,  price: 749 },
    { title: "To Kill a Kingdom",       genre: "Fantasy",   author: "Alexandra Christo",    publishYear: 2018,  price: 549 },
    { title: "The Hobbit",              genre: "Fantasy",   author: "J.R.R. Tolkien",       publishYear: 1937,  price: 999 },
    { title: "The Hunger Games",        genre: "Fiction",   author: "Suzanne Collins",      publishYear: 2008,  price: 149 },
    { title: "Three Musketeers",        genre: "Adventure", author: "Alexandre Dumas",      publishYear: 1844,  price: 699 },
    { title: "The Alchemist",           genre: "Fiction",   author: "Paulo Coelho",         publishYear: 1988,  price: 599 }
];

// *For Each*
let cartValue = 0
books.forEach(book => cartValue += book.price)
console.log(cartValue) 

// *Reduce Function*
const totalBooksValue = books.reduce(
    (accumulator, book) => accumulator + book.price, 0
)
console.log(totalBooksValue)
