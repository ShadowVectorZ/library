const myLibrary=[];


//object constructior
function Book(title,author,pageNumber,read){
    this.title=title;
    this.author=author;
    this.pageNumber=pageNumber;
    this.read=read;
}

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

//supposed to print the properties of each book(object)
function displayBooks(){
    for(let i=0;i<myLibrary.length;i++){
    let content=document.createElement('div')
    content.classList.add('content');
   content.textContent= /* don't know what to put here*/
    display.appendChild(content)
    }
}