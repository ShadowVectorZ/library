
function Book(title,author,pageNumber,read){
    this.title=title;
    this.author=author;
    this.pageNumber=pageNumber;
    this.read=read;
}

let book1=new Book('The Hobbit', 'J.R.R. Tolkien', '255', 'read');
let book2=new Book('Dune', 'Frank Hebert', '650', 'unread');

const myLibrary=[book1, book2];


const dialog=document.querySelector('dialog')
const showButton=document.querySelector('dialog+button')
const closeButton=document.querySelector('dialog button')

showButton.addEventListener('click',()=>{
    dialog.showModal()
})

closeButton.addEventListener('click',()=>{
    dialog.close()
})




/*need to switch prompts with something else, put title author eyc in the function */
function addBookToLibrary(){
 let title=(prompt("What is the title of your book?"))
 let author=(prompt("who is the author of your book?"))
let pageNumber=(prompt("how many page numbers does it have?"))
let read=(prompt("have you already read it?"));
let newBook= new Book(title,author,pageNumber,read);
myLibrary.push(newBook)
let content=document.createElement('div')
content.classList.add('content');
content.textContent= `Title: ${newBook.title}, Author: ${newBook.author}, Pages: ${newBook.pageNumber}, Read Status: ${newBook.read} `
let delButton=document.createElement('button')
delButton.classList.add('del-button')
delButton.textContent='Delete'
content.appendChild(delButton)


let statusButton=document.createElement('button')
statusButton.classList.add('status-button')
statusButton.textContent=`${newBook.read}`
content.appendChild(statusButton)
 display.appendChild(content)
 
 delButton.addEventListener('click', () => {
     content.remove();
    });
}


const display=document.querySelector('#display');


function displayBooks(){
    
    for(let i=0;i<myLibrary.length;i++){
    let content=document.createElement('div')
    content.classList.add('content');
   content.textContent= `Title: ${myLibrary[i].title}, Author: ${myLibrary[i].author}, Pages: ${myLibrary[i].pageNumber}, Read Status: ${myLibrary[i].read} `
   delButton=document.createElement('button')
   delButton.classList.add('del-button')
   delButton.textContent='Delete'
   content.appendChild(delButton)
   let statusButton=document.createElement('button')
statusButton.classList.add('status-button')
statusButton.textContent=`${myLibrary[i].read}`
content.appendChild(statusButton)
    display.appendChild(content)
    delButton.addEventListener('click', () => {
        content.remove();
       });
      
    }
}

console.log(displayBooks())

// const addButton=document.querySelector('#new-book')
// addButton.addEventListener('click',addBookToLibrary)


display.addEventListener("click", (event) => {
    if(event.target.innerText === 'read') {
      event.target.innerText='unread'
    }

    else if (event.target.innerText==='unread'){
        event.target.innerText='read'
    }
  })
