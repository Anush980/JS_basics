const books = [
    {
        title:"no one cares",
        author:"nobody",
        pages:500,
        price:1500

    },
     {
        title:"idk",
        author:"idk author",
        pages:100,
        price:560
    }
    , {
        title:"give a fuck",
        author:"sucker",
        pages:300,
        price:1000
    }
    , {
        title:"sybau",
        author:"sakalaka",
        pages:200,
        price:500
    },
     {
        title:"garess js",
        author:"jatha",
        pages:600,
        price:1300
    }
];
books.forEach((book)=>{
    console.log("Book Titles:");
    console.log(book.title);
})

books.push({title:"new book",author:"newguy",pages:400,price:1500});

books.forEach((book)=>{
    console.log("Books with more than 300 pages:");
    if(book.pages>300){
        console.log(book);
    }
})
const expensiveBooks=books.filter(book=>book.price>800)

const allTitles = books.map(book=>book.title);
const allAuthor = books.map(book=>book.author);
const detailedInfo = books.map(book=>`${book.title} - ${book.pages} pages`);
const pricedInfo = books.map(book=>({title:book.title,price:book.price}))
console.log(allAuthor);
console.log(detailedInfo);
console.log(allTitles);
console.log(pricedInfo);
console.log("Expensive books:");
console.log(expensiveBooks);