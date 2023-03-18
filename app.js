var display = document.querySelector('.display');
console.log(display.value);
let string = "";
var buttons = document.querySelectorAll('button');
console.log(buttons);

function displayNum(element){
    if(element.target.innerHTML == 'AC'){
        display.value = "";
        location.reload();
    } else if(element.target.innerHTML == '='){
        string = eval(string);
        display.value = string;
    }
    else{
        console.log(element.target)
        string = string + element.target.innerHTML;
        console.log(element);
        display.value = string;

    }
}

for(i = 0; i < buttons.length; i++){
    console.log(buttons[i].textContent)
    buttons[i].addEventListener('click', displayNum);
}
