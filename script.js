document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.topnav .nav-links a, .topnav .logo');

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        event.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }

        const menuToggle = document.getElementById('menuToggle');
        if (menuToggle && menuToggle.checked) {
          menuToggle.checked = false;
        }
      }
    });
  });
});





const toggle = document.getElementById("themeToggle");
const showcase = document.getElementById("featureShowcase");

toggle.addEventListener("change", () => {
  showcase.classList.toggle("dark-mode", toggle.checked);
});


const pantoneColors = [
  {
    code: "#7aac5d",
    name: "  --primary:",
    color: "#7aac5d",
  },
  {
    code: "#28492f",
    name: " --secondary:",
    color: "#28492f",
  },
  {
    code: "#f3e7ce",
    name: " --surface:",
    color: "#f3e7ce",
  },
   {
    code: "#fbf7ef",
    name: " --surface-light:",
    color: "#fbf7ef",
  },
    {
    code: "#041a08",
    name: " --on-surface",
    color: "#041a08",
  },
  {
    code: "#ffa94d",
    name: "--highlight-light",
    color: "#ffa94d;",
  },
  {
    code: "#fd7e14",
    name: " --highlight",
    color: "#fd7e14;",
  },
   {
    code: "#041a0826",
    name: " --icon-disabled",
    color: "#041a0826",
  },
  {
    code: "#c63f38",
    name: "--danger",
    color: "#c63f38;",
  },
];

  
    
  

const grid = document.getElementById("pantoneGrid");

pantoneColors.forEach((item) => {
  // create card
  const card = document.createElement("div");
  card.className = "pantone-card";

  // template
  card.innerHTML = `
    <div 
      class="color-swatch" 
      style="background:${item.color}"
    >
      <input 
        class="color-input"
        type="color"
        value="${item.color}" 
      />
    </div>

    <div class="pantone-info">
      <div class="pantone-title">IPLANTONE</div>
      <div class="pantone-code">${item.code}</div>
      <div class="pantone-name">${item.name}</div>
    </div>
  `;

  // color change logic
  const swatch = card.querySelector(".color-swatch");
  const input = card.querySelector(".color-input");

  input.addEventListener("input", (e) => {
    swatch.style.background = e.target.value;
  });

  // append
  grid.appendChild(card);
});

const task = document.getElementById("task");
const doneColumn = document.getElementById("done-column");

const wireframe1 = document.getElementById("wireframe-1");
const wireframe2 = document.getElementById("wireframe-2");

task.addEventListener("dragstart", () => {
  task.classList.add("dragging");
});

task.addEventListener("dragend", () => {
  task.classList.remove("dragging");
});

doneColumn.addEventListener("dragover", (e) => {
  e.preventDefault();
});

doneColumn.addEventListener("drop", () => {

  doneColumn.appendChild(task);

  wireframe1.src = "./assets/plant homepage after.png";
  wireframe2.src = "./assets/plant detail after.png";

});

