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
const generateBtn = document.querySelector("[generate-password]");
const allCheckBox = document.querySelector("input[type=checkbox");
const symbols = "~`!@#$%^&*()_+-{[}]|:;/<>.,'";

/**
 * Default cases 
*/
let password = "";
let passLen = 10;
let cntCheckBox = 1;
handleSlider();
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
    lowerCase.checked = true;
}

// set indicator
function setIndicator(color) {
    indicator.computedStyleMap.backgroundColor = color;
    // shadow 
}

// get random values
function getRandomVal(min, max) {
    return Math.floor(Math.random()) * (max - min) + min;
}

//generate random int
function generateRandomInt() {
    return getRandomVal(0, 9);
}

//generate lowercase character
function generateRandomLowercase() {
    return String.fromCharCode(getRandomVal(97, 97 + 26));
}

//generate uppercase character
function generateRandomUppercase() {
    return String.fromCharCode(getRandomVal(65, 65 + 26));
}

// generate symbols 
function generateRandomSymbol() {
    return symbols[getRandomVal(0, symbols.length) % symbols.length];
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
        setIndicator("#0f0");
    }
    else if ((hasSym == true || hasNum == true) && (hasLower == true || hasUpper == true) && passLen >= 8) {
        // moderate
        setIndicator("#ff0");
    }
    else if ((hasSym == true || hasNum == true) || (hasLower == true || hasUpper == true)){
        // easy if any attributes is not checked we can't generate any password
        setIndicator("#f00");
    }
}