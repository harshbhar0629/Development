// async function utility() {
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     console.log(output);
// }

// utility();

// async function f() {
//     let option = {
//         method: 'POST',
//         body: JSON.stringify({
//             title: "hello ji",
//             body: 'mere solid body re',
//             userId: 1,
//             weight: 93,
//             photoCaption: "photo dekhega to dar jaayega",
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     };

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/', option);
//     let output = await content.json();
//     return output;
// }

// async function abcd() {
//     let op = await f();
//     console.log(op);
// }

// abcd();


// api is asynchronous in nature so it takes time to fetching the api response
let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log("Data1: => ",data.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log("Data2: => ", data.fact);
//     })
//     .catch((err) => {
//         console.log("Error: => ", err);
//     })

async function getFact() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    }
    catch (err) {
        console.log(err);
    }
}

getFact();