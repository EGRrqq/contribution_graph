import './style.css'
import './types'

import { dateController, graphController } from "./controllers"

window.addEventListener("load", init, { once: true });

const dates = dateController.getLastDates(30);
const weeks = graphController.getWeeks(dates);

// draw squares, should move in separate file
function init() {
  const graphEl = document.getElementById("graph");
  if (!graphEl) return;

  Object.values(weeks).forEach((c, ci) => {
    const col = document.createElement("div");

    c.forEach((n, ri) => {
      const section = document.createElement("section");
      section.textContent = n.getDate().toString();
      section.style.gridArea = `${ri + 1}/${ci + 1}`

      col.style.gridArea = `1/${ci + 1}`
      col.appendChild(section);
    });

    graphEl.appendChild(col);
  });
}

console.log(dates);
console.log(weeks);
