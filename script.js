//selecting popup box popup overlay button
var popupoverlay = document.querySelector(".popupoverlay")
var popupbox = document.querySelector(".popupbox")
var addpopupbutton = document.queryElementById("add-popup-button")

addpopupbutton.addEventListner("click",function(){
popupoverlay.Style.display = "block"
popupbox.Style.display = "block"
})

//select cancel button
var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event)
{
    event.preventDefault()
    popupoverlay.Style.display = "none"
popupbox.Style.display = "none"
})
//select container,add -book,book-title-input,book-author-input,boook-description-input

var container = document.querySelector("container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var booktitleinput = document.getElementById("book-title-input")
var bookdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.dispatchEvent.innerHTML= `<h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdescriptioninput.value}</p>
        <button>Delete</button>
`
    container.append(div)
})





