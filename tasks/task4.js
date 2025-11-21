class Book {
  constructor(title, author, pages, price) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.price = price;
  }

  getSummary() {
    return `${this.title} by ${this.author} with ${this.pages} pages on Rs.${this.price} only`;
  }

  isBigBook() {
    return this.pages > 400;
  }

  applyDiscount(percent) {
    this.price -= (this.price * percent) / 100;
  }

  adjustPrices() {
    if (this.pages > 400) this.price += 100;
    else this.price += 20;
  }
 totalPrice() {
   return this.price +=this.price;
 }
}

class Library{
    
    constructor(){
        this.books=[];
    }
    addBook(book){
        this.books.push(book);
    }
    removeBook(title){
      const remove=  this.books.findIndex(book=>book.title===title);
      if(remove!=-1){
        this.books.splice(remove,1);
      }
    }
    listBooks(){
        this.books.forEach(book=> console.log(book.getSummary()))
    }
    searchByAuthor(author){
       return this.books.filter(book=>book.author===author)
    }
     searchByTitle(title){
       return this.books.filter(book=>book.title===title)
    }
     totalPrice(){
   return this.books.reduce((acc,book)=>acc+book.price,0)
  }
}

const library = new Library();

const b1 = new Book("Book1", "Author1", 200, 300);
const b2 = new Book("Book2", "Author2", 500, 1000);
const b3 = new Book("Book3", "Author1", 150, 200);

library.addBook(b1);
library.addBook(b2);
library.addBook(b3);

console.log("All Books:");
library.listBooks();

console.log("Books by Author1:");
console.log(library.searchByAuthor("Author1"));

library.removeBook("Book2");
console.log("After Removal:");
library.listBooks();
console.log("---try---");
console.log("Total Price of Books:", library.totalPrice());

