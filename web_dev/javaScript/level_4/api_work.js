// async function showWeather() {
//     try {
//         let API_key = '45781273e48247850428802585ec3081';
//         let body = document.querySelector('body');
//         let city = 'Uttar Pradesh';
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);

//         const data = await response.json();
//         console.log(data);

//         let para = document.createElement('p');
//         body.appendChild(para);
//         para.innerText = "weather coordinates";

//         let para1 = document.createElement('p');
//         body.appendChild(para1);
//         para1.innerText = "Latitude: " + data.coord.lat;

//         let para2 = document.createElement('p');
//         body.appendChild(para2);
//         para2.innerText = "Longitude: " + data.coord.lat;

//         let para3 = document.createElement('p');
//         body.appendChild(para3);
//         para3.innerText = "Humidity: " + data.main.humidity;

//         let para4 = document.createElement('p');
//         body.appendChild(para4);
//         para4.innerText = "Temp: " + data?.main?.temp.toFixed(4);
//     }
//     catch (e) {
//         console.log("Error aya h");
//     }
// }

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPos);
    }
}

function showPos(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    console.log("Latitude: ", lat);
    console.log("Longitude: ", long);
}
