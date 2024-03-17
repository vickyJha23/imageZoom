// console.log("Har Har Mahadev");
const img = document.querySelector("#myImage");
const resultDiv = document.querySelector("#myResult");
const lens = document.querySelector(".lens");
let xScallingFactor = resultDiv.offsetWidth / lens.offsetWidth;
let yScallingFactor = resultDiv.offsetHeight / lens.offsetHeight;

const getCursorPosition = (e) => {
   let x, y, a;
    a = img.getBoundingClientRect();
    console.log(a.left);
    x = e.clientX - a.left;
    y = e.clientY - a.top;
   return {x: x, y: y};
}
const moveLens = (e) => {
    let pos, x, y;
    pos = getCursorPosition(e);
    x = pos.x - (lens.offsetWidth / 2);
    y = pos.y - (lens.offsetHeight / 2);
    if(x > img.width - lens.offsetWidth){
         x = img.width - lens.offsetWidth;
    }
    if(y > img.height - lens.offsetHeight){
         y = img.height - lens.offsetHeight;
    }
    if(x < 0){
          x = 0;
    }
    if(y < 0){
         y = 0;
    }
    lens.style.left = `${x}px`;
    lens.style.top = `${y}px`
    resultDiv.style.backgroundPosition = `${-x * xScallingFactor}px ${-y * yScallingFactor}px`;
}

const imageZoom = (img, resultDiv, lens) => {
    resultDiv.style.backgroundImage = `url(${img.src})`;
    resultDiv.style.backgroundSize = `${img.width * xScallingFactor}px ${img.height * yScallingFactor}px`;

    img.addEventListener("click", moveLens)

  }
imageZoom(img, resultDiv, lens);



