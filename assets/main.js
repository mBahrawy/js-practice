var outerHeadLine = document.querySelector("#myHeading");
var myButton = document.querySelector("#myButton");
var list = document.querySelector("#myUl") ;
var listItems = document.querySelectorAll("#myUl li");
var newItemCounter = 1;


list.addEventListener("click", activateItem);

/*for (i=0; i< listItems.length; i++){
    listItems[i].addEventListener("click", activateItem);
}*/

function activateItem(e){
 if(e.target.nodeName == "LI"){
    outerHeadLine.innerHTML = e.target.innerHTML;

    for (i=0; i< e.target.parentNode.children.length; i++){
        e.target.parentNode.children[i].classList.remove("active");
    }

    e.target.classList.add("active");
 }

}
myButton.addEventListener("click", addNewElement);

function addNewElement(){
    list.innerHTML += "<li>New item "+newItemCounter+" </li>";
    newItemCounter++;
}