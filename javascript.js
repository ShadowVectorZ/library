
function Book(title,author,pageNumber,read){
    this.title=title;
    this.author=author;
    this.pageNumber=pageNumber;
    this.read=read;
}

let book1=new Book('The Hobbit', 'J.R.R. Tolkien', '255', 'Read');
let book2=new Book('Dune', 'Frank Hebert', '650', 'Unread');

const myLibrary=[book1, book2];

const dialog=document.querySelector('dialog')
const addButton=document.querySelector('dialog+button')
addButton.addEventListener('click',addBookToLibrary)
const modalForm=document.querySelector('form')
const cancel = document.querySelector("#cancel");
cancel.addEventListener("click", () => {
    dialog.close();
});


function addBookToLibrary(){
    dialog.showModal()
    modalForm.addEventListener('submit',(event)=>{
        event.preventDefault()
 let title=document.querySelector('#book-title').value
 let author=document.querySelector('#book-author').value
 let pageNumber=document.querySelector('#page-number').value
 let read=document.querySelector('select').value
 if (pageNumber===undefined||pageNumber===null||pageNumber===''){
    modalForm.reset()
    dialog.close()}
 else{
 let newBook= new Book(title,author,pageNumber,read);
 myLibrary.push(newBook)
 let content=document.createElement('div')
 content.classList.add('content');
 content.textContent= `Title: ${newBook.title}, Author: ${newBook.author}, Pages: ${newBook.pageNumber} `
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
 modalForm.reset()
 dialog.close()
}
 })}

const display=document.querySelector('#display');

function displayBooks(){
    for(let i=0;i<myLibrary.length;i++){
    let content=document.createElement('div')
    content.classList.add('content');
   content.textContent= `Title: ${myLibrary[i].title}, Author: ${myLibrary[i].author}, Pages: ${myLibrary[i].pageNumber}`
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

display.addEventListener("click", (event) => {
    if(event.target.innerText === 'read') {
      event.target.innerText='unread'
    }
    else if (event.target.innerText==='unread'){
        event.target.innerText='read'
    }
  })
