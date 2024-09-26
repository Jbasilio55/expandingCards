import { images } from "/dataIMG.js";

const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);
let panelEl;

function addInnerHtml() {
  let innerHTML = "";
  for (let img of images) {
    innerHTML += `  
            <div class="panel" style="background-image: url(${img.image})" aria-label="picture of ${img.alt}">  
                <h3>${img.name}</h3>        
            </div>  
        `;
  }

  container.innerHTML = innerHTML;
  panelEl = document.querySelectorAll(".panel");

  panelEl.forEach(function (panel) {
    panel.addEventListener("click", function () {
      removeActive();
      panel.classList.add("active");
    });
  });
}

function removeActive() {
  panelEl.forEach((panel) => {
    panel.classList.remove("active");
  });
}

addInnerHtml();
