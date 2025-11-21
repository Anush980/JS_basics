name = "manush";
const user = {
  name: "anush",
  greet: function () {
    // arrow function dont bind this
    console.log(`Good morning ${name}`); // this picks manush on normal function
    console.log(`Good morning ${this.name}`);
  },
};

user.greet();

const god = {
  firstName: "borish",
  lastName: "ghimire",
  age: 40000,
  hobbies: ["teaching", "dancing", "going_to_hell"],
  describe: function () {
    console.log(
      `Hi, I’m ${this.firstName} ${this.lastName}. I am ${
        this.age
      } years old and I love ${this.hobbies.join(", ")}.`
    );
  },
};
god.describe();
console.log("----------------");

function book(title, author, pages, price) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.price = price;
  this.getSummary = function () {
    return `${this.title} by ${this.author} with ${this.pages} pages on Rs.${this.price} only`;
  };
  this.isBigBook = function () {
    return this.pages > 400;
  };
  this.applyDiscount = function (percent) {
    this.price = this.price - (this.price * percent) / 100;
  };
  this.adjustPrices = function () {
    if (this.pages > 400) {
      this.price += 100;
    } else {
      this.price += 20;
    }
  };
}

const b1 = new book("book1", "author1", 200, 300);
const b2 = new book("book2", "author2", 500, 1000);
const b3 = new book("book3", "author3", 100, 100);
console.log(b1.getSummary());
console.log(b2.getSummary());
console.log(b3.getSummary());
console.log(b1.isBigBook());
console.log(b2.isBigBook());
console.log(b3.isBigBook());

b1.applyDiscount(20);
console.log(b1.price);

b2.applyDiscount(20);
console.log(b2.price);

b1.adjustPrices();
b2.adjustPrices();
b3.adjustPrices();
console.log(b1.price);
console.log(b2.price);
console.log(b3.price);
console.log("--------------last task------------------");

function lastbook(title, author, pages, price) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.price = price;
  }

  lastbook.prototype.getSummary=function(){
    return `${this.title} by ${this.author} with ${this.pages} pages on Rs.${this.price} only`;
  };
  lastbook.prototype.isBigBook= function(){
    return this.pages > 400;
  }
  lastbook.prototype.applyDiscount=function(percent){
     this.price = this.price - (this.price * percent) / 100;
  }

  lastbook.prototype.adjustPrices=function(){
     if (this.pages > 400) {
      this.price += 100;
    } else {
      this.price += 20;
    }
  }

  const lb1 = new lastbook("lastbook1", "Lauthor1", 200, 300);
const lb2 = new lastbook("lastbook2", "Lauthor2", 500, 1000);
const lb3 = new lastbook("lastbook3", "Lauthor3", 100, 100);

console.log(lb1.getSummary());
console.log(lb2.getSummary());
console.log(lb3.getSummary());

console.log(lb1.isBigBook());
console.log(lb2.isBigBook());
console.log(lb3.isBigBook());

lb1.applyDiscount(20);
lb2.applyDiscount(20);
lb3.applyDiscount(20);

console.log(lb1.price);
console.log(lb2.price);
console.log(lb3.price);

lb1.adjustPrices();
lb2.adjustPrices();
lb3.adjustPrices();

console.log(lb1.price);
console.log(lb2.price);
console.log(lb3.price);