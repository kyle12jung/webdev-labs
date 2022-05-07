let currentFontsize = 2; // hardcoded

const makeBigger = (ev) => {
   currentFontsize += 0.2;
   setFont();
   // ev.target.innerHTML = "B"
   // does not need ev
};

const setFont = () => {
   document.querySelector('.content').style.fontSize = `${currentFontsize}em`;
   document.querySelector('h1').style.fontSize = `${currentFontsize + 0.5}em`;
};


const makeSmaller = () => {
   currentFontsize -= 0.2;
   setFont();
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

