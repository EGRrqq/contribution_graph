import "./style.css";
import { generateGraph } from "./controllers/graphController";

const graphEl = document.getElementById("graph");
window.addEventListener("load", init, { once: true });

// draw graph data, for visualization purposes
function init() {
  if (!graphEl) return;
  const graphArr = generateGraph({
    days: 30,
    daysPerWeek: 7,
    initDay: 1,
  });
  console.log(graphArr);

  graphArr.forEach((r) => {
    const row = document.createElement("div");

    r.forEach((n) => {
      const section = document.createElement("section");
      section.textContent = Object.keys(n)[0];
      row.appendChild(section);
    });

    graphEl.appendChild(row);
  });
}
