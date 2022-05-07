/*
    Hints:
    1. Attach click event handlers to all four of the
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag
       based on the button that was clicked.
*/

const make_ocean = () => {
   body = document.querySelector("body")
   body.className = "ocean"
}

const make_desert = () => {
   body = document.querySelector("body")
   body.className = "desert"
}

const make_contrast = () => {
   body = document.querySelector("body")
   body.className = "high-contrast"
}

const make_default = () => {
   body = document.querySelector("body")
   body.removeAttribute("class");
}

document.querySelector("#ocean").addEventListener('click', make_ocean);
document.querySelector("#desert").addEventListener('click', make_desert);
document.querySelector("#high-contrast").addEventListener('click', make_contrast);
document.querySelector("#default").addEventListener('click', make_default);
