const modal = document.querySelector(".modal");
const overlay = document.querySelector('.overlay');

const openShareModal = () => {
    console.log("Modal was open");
    modal.classList.add("active");
    overlay.classList.add("overlayActive");
};

const closeShareModal = () => {
    console.log("Modal was close");
    modal.classList.remove("active");
    overlay.classList.remove("overlayActive");
};

let btn = document.querySelector("#btn");
btn.addEventListener('click', () => {
    if (btn.textContent == "Follow Me") {
        // console.log(1);
        btn.textContent = "Following";
        btn.classList.add("change");
    }
    else {
        // console.log(12);
        btn.classList.remove("change");
        btn.textContent = "Follow Me";
    }
});