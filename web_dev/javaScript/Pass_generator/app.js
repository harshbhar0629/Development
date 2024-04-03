/**
 * Acess all Attributes it easier to check Attribute name
*/
const inputSlider = document.querySelector("[data-len-slider]");
const dataLen = document.querySelector("[data-len]");
const passDisplay = document.querySelector("[display-password]");
const copyBtn = document.querySelector("[pass-btn]");
const copyMsg = document.querySelector("[copy-data]");
const lowerCase = document.querySelector("#lowercase");
const upperCase = document.querySelector("#uppercase");
const number = document.querySelector("#number");
const symbol = document.querySelector("#symbol");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generate-password");
const allCheckBox = document.querySelector("input[type=checkbox");
const symbols = "~`!@#$%^&*()_+-{[}]|:;/<>.,'";

/**
 * Default cases 
*/
let password = "";
let passLen = 10;
let cntCheckBox = 1;
handleSlider();
setIndicator("#ccc");
// set grey color

/**
 * Required functions
 * calculate length based on moving slider
 * click on generate password it will give you password 
 * copy password
 * generate random password -> it required four function
 *  ***
 *  * for Uppercase
 *  * for Lowercase
 *  * for Number
 *  * for Symbol
 *  ***
 * set strength color based on password
 * 
*/

// set password length 
function handleSlider() {
    inputSlider.value = passLen;
    dataLen.innerHTML = passLen;
    if (cntCheckBox > 0) {
        lowerCase.checked = true;        
    }
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ((passLen - min) * 100 / (max - min)) + "% 100%";
}

// set indicator
function setIndicator(color) {
    // console.log("color");
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

// get random values
// function getRandomVal(min, max) {
//     return (Math.floor(Math.random()) * (max - min)) + min;
// }

//generate random int
function generateRandomInt() {
    return (Math.floor(Math.random() * (10))) % 10;
}

//generate lowercase character
function generateRandomLowercase() {
    return String.fromCharCode(((Math.floor(Math.random() * (27))) % 26) + 97)
}

//generate uppercase character
function generateRandomUppercase() {
    return String.fromCharCode(((Math.floor(Math.random() * (27))) % 26) + 65);
}

// generate symbols 
function generateRandomSymbol() {
    let idx = (Math.floor(Math.random() * symbols.length)) % symbols.length;
    return symbols[idx];
}

//set color for strength
function setColorStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasSym = false;
    let hasNum = false;
    if (upperCase.checked) hasUpper = true;
    if (lowerCase.checked) hasLower = true;
    if (number.checked) hasNum = true;
    if (symbol.checked) hasSym = true;

    if (passLen >= 10 && hasSym == true && hasNum == true && (hasLower == true || hasUpper == true)) {
        // strong pass 
        setIndicator("#f00");
    }
    else if ((hasSym == true || hasNum == true) && (hasLower == true || hasUpper == true) && passLen >= 6) {
        // moderate
        setIndicator("#ff0");
    }
    else if ((hasSym == true || hasNum == true) || (hasLower == true || hasUpper == true)) {
        // easy if any attributes is not checked we can't generate any password
        setIndicator("#0f0");        
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passDisplay.value);
        copyMsg.innerHTML = "Copied";
    }catch(e) {
        copyMsg.innerHTML = "Failed";
    }
    copyMsg.classList.add("active");
    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000);
}

inputSlider.addEventListener("input", (event) => {
    passLen = event.target.value;
    handleSlider();
});

copyBtn.addEventListener("click", () => {
    if (password.length > 0 || passDisplay.value) {
        copyContent();
    }
});

// cnt check box
upperCase.addEventListener('click', () => {
    if (upperCase.checked) {
        cntCheckBox++;
    }
    else {
        cntCheckBox--;
    }
    // console.log(cntCheckBox);
});

lowerCase.addEventListener('click', () => {
    if (lowerCase.checked) {
        cntCheckBox++;
    }
    else {
        cntCheckBox--;
    }
    // console.log(cntCheckBox);
});

number.addEventListener('click', () => {
    if (number.checked) {
        cntCheckBox++;
    }
    else {
        cntCheckBox--;
    }
    // console.log(cntCheckBox);
});

symbol.addEventListener('click', () => {
    if (symbol.checked) {
        cntCheckBox++;
    }
    else {
        cntCheckBox--;
    }
    // console.log(cntCheckBox);
});

function generatePass() {

    let len = passLen;
    let previous = -1;
    while (len > 0) {
        len--;
        let r = Math.floor(Math.random() * 4) ;
        if (r == 1 && lowerCase.checked) {
            password += generateRandomLowercase();
        }
        else if (r == 2 && upperCase.checked) {
            password += generateRandomUppercase();
        }
        else if (r == 3 && number.checked) {
            password += generateRandomInt();
        }
        else if (r == 4 && symbol.checked) {
            password += generateRandomSymbol();
        }
        else {
            if (symbol.checked && previous != 1 || cntCheckBox == 1 || cntCheckBox == 4) {
                password += generateRandomSymbol();
                previous = 1;
            }
            else if (number.checked && previous != 2 || cntCheckBox == 1 || cntCheckBox == 4) {
                password += generateRandomInt();
                previous = 2;
            }
            else if (upperCase.checked && previous != 3 || cntCheckBox == 1) {
                password += generateRandomUppercase();
                previous = 3;
            }
            else if (lowerCase.checked && previous != 4 || cntCheckBox == 1) {
                password += generateRandomLowercase();
                previous = 4;
            }
        }
        // console.log(password);
    }
}

// main function 
generateBtn.addEventListener('click', () => {
    password = "";
    passDisplay.value = password;
    if (cntCheckBox > 0) {
        generatePass();
        passDisplay.value = password;
        // console.log(password);
    }
    setColorStrength();
});
