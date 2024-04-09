const userTab = document.querySelector("[userWeather]");
const searchTab = document.querySelector("[searchWeather]");
const userCont = document.querySelector(".weather-container");
const grantAccess = document.querySelector(".grant-loc-cont");
const searchForm = document.querySelector("[search-cont]");
const loadingScr = document.querySelector(".loading-cont");
const userInfoCont = document.querySelector(".user-info-cont");


// intial-variable required
let currTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
currTab.classList.add("curr-tab");
getWeatherFromStorage();

function getWeatherFromStorage() {
    loadingScr.classList.add("active");
    // it check coordinates are present in storage or not
    let localCord = sessionStorage.getItem("user-coordinates");
    if (!localCord) {
        // if not present 
        grantAccess.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCord);
        fetchUserWeatherInfo(coordinates);
    }
    loadingScr.classList.remove("active");
}

async function fetchUserWeatherInfo(coord) {
    const { lat, lon } = coord;
    // remove grant location invisible
    grantAccess.classList.remove("active");
    loadingScr.classList.add("active");

    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        
        const data = await res.json();
        userInfoCont.classList.add("active");
        renderWeatherInfo(data);// it takes values from passing data and put value in your UI
        loadingScr.classList.remove("active");
    }
    catch(err) {
        // console.error("Something Went Wrong");
        alert("Something Went Wrong");
        loadingScr.classList.remove("active");
    }
}

function renderWeatherInfo(data) {
    // firstly fetch all required element
    const cityName = document.querySelector("[data-city-name]");
    const countryIcon = document.querySelector("[data-city-icon]");
    const weatherDesc = document.querySelector("[data-weatherDesc]");
    const weatherImg = document.querySelector("[data-weather-icon]");
    const tempData = document.querySelector("[data-temp]");
    const wind = document.querySelector("[data-windSpeed]");
    const humidity = document.querySelector("[data-humidity]");
    const clouds = document.querySelector("[data-clouds]");
    if (data?.name == undefined || data?.main?.temp == undefined) {
        alert("Something Went Wrong:)");
        alert("Please enter correct name:)");
        return;
    }
    // put all values 
    cityName.innerHTML = data?.name;
    //use api for finding flag
    countryIcon.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;
    weatherDesc.innerHTML = data?.weather?.[0]?.main;
    //use api for finding weather
    weatherImg.src = `http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;
    tempData.innerText = `${data?.main?.temp.toFixed(2)} °C`;
    wind.innerText = `${data?.wind?.speed.toFixed(2)}m/s`;
    humidity.innerText = `${data?.main?.humidity}%`;
    clouds.innerText = `${data?.clouds?.all}%`;
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
});

function showPos(position) {
    const userCord = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
    };

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCord));
    fetchUserWeatherInfo(userCord);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPos);
    }
    else {
        alert("Not Available");        
    }
}

const grantBtn = document.querySelector(".grant-btn");
grantBtn.addEventListener("click", () => {
    loadingScr.classList.add("active");
    getLocation();
    loadingScr.classList.remove("active");
});

async function fetchSearchWeatherInfo(city) {
    loadingScr.classList.add("active");
    userInfoCont.classList.remove("active");
    grantAccess.classList.remove("active");

    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();
        loadingScr.classList.remove("active");
        userInfoCont.classList.add("active");
        renderWeatherInfo(data);
    }
    catch (err) {
        // console.log("error");
        alert("Something Went Wrong");
    }
    loadingScr.classList.remove("active");
}


const searchInp = document.querySelector("[search-input]");
searchForm.addEventListener("submit", (val) => {
    val.preventDefault();
    // console.log("yes");
    const cityName = searchInp.value;
    if (cityName === "") {
        return;
    }
    else {
        fetchSearchWeatherInfo(cityName);
    }
});
