window.addEventListener("DOMContentLoaded", bindEvents);


function bindEvents(){
    
    var buttons = document.querySelectorAll("button");
    for(let button of buttons)
    {
        if(button.innerHTML === "="){
           
            button.addEventListener("click", resultFunction);
        }
        else{
            button.addEventListener("click", compute)
        }
    }
    document.querySelector("#clear").addEventListener("click", clearFunction);
}
function compute(){
    var currentOperation = this.getAttribute("data-myOperation");
    if(currentOperation === "add"){
        
        document.querySelector("#output").innerHTML += "+";
    }
    else if(currentOperation === "sub"){
        
        document.querySelector("#output").innerHTML += "-";
    }
    else if(currentOperation === "mul"){
        document.querySelector("#output").innerHTML += "*";
    }
    else if(currentOperation === "div"){
        document.querySelector("#output").innerHTML += "/";
    }
    else{
        document.querySelector("#output").innerHTML += currentOperation;
       
    }

}
function resultFunction(){
    document.querySelector("#output").innerHTML= eval( document.querySelector("#output").innerHTML);

}
function clearFunction(){
    document.querySelector("#output").innerHTML = "";
}