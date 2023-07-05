const bigCharacters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const smallCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let char = smallCharacters;
let fp = "";
let sp = "";

let secondPassword = document.getElementById("second-password");
let firstPassword = document.getElementById("first-password");

let myCheckbox1El = document.getElementById("myCheckbox1");
let myCheckbox2El = document.getElementById("myCheckbox2");
let myCheckbox3El = document.getElementById("myCheckbox3");

function selectCharacters() {
    if (myCheckbox1El.checked) {
        char = char.concat(bigCharacters)
    } else {
        char = char.filter(item => !bigCharacters.includes(item))
    }
    if (myCheckbox2El.checked) {
        char = char.concat(numbers)
    } else {
        char = char.filter(item => !numbers.includes(item))
    }
    if (myCheckbox3El.checked) {
        char = char.concat(specialCharacters)
    } else {
        char = char.filter(item => !specialCharacters.includes(item))
    }
}

function generatePassword() {
    let fp = "";
    let sp = "";

    for (let i = 0; i < 12; i++) {
        fp += char[Math.floor(Math.random() * char.length)];
        sp += char[Math.floor(Math.random() * char.length)];
    }
    firstPassword.textContent = fp;
    secondPassword.textContent = sp;   
}

function coppyFirstPassword() {
    let fp = firstPassword.textContent;
    navigator.clipboard.writeText(fp);
    alert("Copied the text: " + copyText.value);
}
function coppySecondPassword() {
    let sp = secondPassword.textContent
    navigator.clipboard.writeText(sp);
    alert("Copied the text: " + copyText.value);
}


