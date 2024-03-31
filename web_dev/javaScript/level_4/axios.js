// https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let p = document.querySelector("#fact");
    p.innerHTML = "Processing..";
    let data = await getFact();
    p.innerHTML = data;
});

let url = "https://catfact.ninja/fact";

async function getFact() {
    try {
        let response = await axios.get(url);
        return response.data.fact;
    }
    catch (err) {
        console.log(err);
        return "Oops! Something went wrong!";
    }
}

let url2 = "https://dog.ceo/api/breeds/image/random";
async function getImg() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    }
    catch (err) {
        console.log(err);
        return "Oops! Something went wrong!";
    }
}

let btn2 = document.querySelector("#show");
btn2.addEventListener("click", async () => {
    let h2 = document.querySelector("h2");
    h2.innerHTML = "Image Updating...";
    let img = document.querySelector('img');
    img.src = await getImg();
    h2.innerHTML = '';
    btn2.innerHTML = "Show other image";
})

// getFact();
// fact
// :
// "The ability of a cat to find its way home is called “psi-traveling.” Experts think cats either use the angle of the sunlight to find their way or that cats have magnetized cells in their brains that act as compasses."
