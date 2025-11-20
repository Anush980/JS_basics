const books = [
    {
        title:"no one cares",
        author:"nobody",
        pages:500,
        price:1500,
        genre:"comedy"
    },
     {
        title:"idk",
        author:"idk author",
        pages:100,
        price:560,
        genre:"action"
    }
    , {
        title:"give a fuck",
        author:"sucker",
        pages:300,
        price:1000,
        genre:"romance"
    }
    , {
        title:"sybau",
        author:"sakalaka",
        pages:200,
        price:500,
        genre:"manga"
    },
     {
        title:"garess js",
        author:"jatha",
        pages:600,
        price:200,
        genre:"genre"
    }
];

function addBook(book){
   books.push(book);
}
addBook({
    title:"new book",
        author:"new",
        pages:600,
        price:1300,
        genre:"naya"
})

function removeBook(title){
    const index=books.findIndex(book=>book.title===title)
    if(index!==-1){
        books.splice(index,1)
    }
    else{
        console.log("Book not found.")
    }
}
removeBook("sybau");
 console.log("--------");
const newlist = books.forEach((book)=>{
   
   console.log(book.title);
}
)
 console.log("--------");
function searchBook(genre){
const search=books.filter((book)=>book.genre===genre);
console.log(search);

}
searchBook("naya");
 console.log("----aff----");
function getAffordableBooks(price){
    const affordableBooks=books.forEach(book=>{
        if(book.price<price){
console.log(book);
        }
    })
}
getAffordableBooks(800);

const formatBooks = books.map((book)=>
console.log(`Title: ${book.title} | Author: ${book.author} | ${book.pages} pages | Genre: ${book.genre}`))
