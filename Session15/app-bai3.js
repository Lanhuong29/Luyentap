let divElement = document.querySelector("#root");
let inputElement = document.querySelector("#item-todo");
let buttonElement = document.querySelector("#submit-item");
let ulElement = document.querySelector("#list");

function addItem () {
    if(!buttonElement && !inputElement && !ulElement) return;

    if(inputElement.value !== "") {
        let liElement = document.createElement("li");
        liElement.innerText = inputElement.value;
        ulElement.appendChild(liElement);

        inputElement.value = "";
        inputElement.onchange = (e) => {
            if (e.target.value != "") {
                inputElement.style.backgroundColor = "transparent";
            } else {
                inputElement.style.backgroundColor = "yellow";
            }
        }
        // if (inputElement.value != "") {
        //     inputElement.style.backgroundColor = "transparent";
        // }
        // inputElement.style.backgroundColor = "yellow";
    } else {
        inputElement.style.backgroundColor = "yellow";
    }
}