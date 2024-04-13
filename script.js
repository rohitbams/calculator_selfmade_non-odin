const aNum = document.querySelector("#number");
const bNum = document.querySelector("#number");
let cNum = document.querySelector('.operator');

document.querySelector('button').addEventListener('click', display); 

    function display() {
    document.querySelector("display").textContent = aNum;
    
    }
if (cNum === '+') {
    function sum() {
        display.textContent = (aNum+bNum);
        return sum;
    }
}
else if (cNum === '-') {
    display.textContent = (aNum-bNum);
}
else if (cNum === '*') {
    display.textContent = (aNum*bNum);
}else if (cNum === '/') {
    display.textContent = (aNum/bNum);
}
else {
    display = ('Please enter the correct operator');
}

