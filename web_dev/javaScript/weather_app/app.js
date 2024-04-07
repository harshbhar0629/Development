const userTab = document.querySelector("[userWeather]");
const searchTab = document.querySelector("[searchWeather]");
const userCont = document.querySelector(".weather-container");
const grantAccess = document.querySelector(".grant-loc-cont");
const searchForm = document.querySelector(".form-cont");
const loadingScr = document.querySelector(".grant-loc-cont");
const userInfoCont = document.querySelector(".user-info-cont");


// intial-variable required
let currTab = userTab;
const API_KEY = "45781273e48247850428802585ec3081";
currTab.classList.add("curr-tab");

function getWeatherFromStorage() {
    
}


function switchTab(inputTab) {
    if (currTab != inputTab) {
        // means tab switch
        currTab.classList.remove("curr-tab");
        currTab = inputTab;
        currTab.classList.add("curr-tab");
        
        if (!searchForm.classList.contains("active")) {
            userInfoCont.classList.remove("active");
            grantAccess.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            searchForm.classList.remove("active");
            userInfoCont.classList.add("active");
            getWeatherFromStorage();
        }
    }
}

userTab.addEventListener("click", () => {
    // pass clicked tab as input
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    // pass clicked tab as input 
    switchTab(searchTab);
})

