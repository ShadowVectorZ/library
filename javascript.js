const myLibrary=[];

function Book(title,author,pageNumber,read){
    this.title=title;
    this.author=author;
    this.pageNumber=pageNumber;
    this.read=read;
}

function addBookToLibrary(){
 let title=(prompt("What is the title of your book?"))
 let author=(prompt("who is the author of your book?"))
let pageNumber=(prompt("how many page numbers does it have?"))
let read=(prompt("have you already read it?"));
let newBook= new Book(title,author,pageNumber,read);
myLibrary.push(newBook)
console.log(myLibrary)
}


