


//object constructior
function Book(title,author,pageNumber,read){
    this.title=title;
    this.author=author;
    this.pageNumber=pageNumber;
    this.read=read;
}

let book1=new Book('The Hobbit', 'J.R.R. Tolkien', '255', 'read');
let book2=new Book('Dune', 'Frank Hebert', '650', 'unread');


const myLibrary=[book1, book2];

let newBook
//adds book to array
function addBookToLibrary(){
 let title=(prompt("What is the title of your book?"))
 let author=(prompt("who is the author of your book?"))
let pageNumber=(prompt("how many page numbers does it have?"))
let read=(prompt("have you already read it?"));
 newBook= new Book(title,author,pageNumber,read);
myLibrary.push(newBook)
console.log(myLibrary)
}


const display=document.querySelector('#display');


function displayBooks(){
    for(let i=0;i<myLibrary.length;i++){
    let content=document.createElement('div')
    content.classList.add('content');
    
   content.textContent= `Title: ${myLibrary[i].title}, Author: ${myLibrary[i].author}, Pages: ${myLibrary[i].pageNumber}, Read Status: ${myLibrary[i].read} `
    display.appendChild(content)
    }
}

console.log(displayBooks())