import "./style.css";

// date stuff
const today = new Date();
const substractDays = (n: number) =>
  new Date(new Date().setDate(today.getDate() - n));
const formatDate = (date: Date) =>
  `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

const graphEl = document.getElementById("graph");
window.addEventListener("load", init, { once: true });

// draw ui, should be in separate file
function init() {
  if (!graphEl) return;
  const graphArr = drawGraph(351, 1, 7);

  graphArr.forEach((r) => {
    const row = document.createElement("div");

    r.forEach((n) => {
      const section = document.createElement("section");
      section.textContent = n.toString();
      row.appendChild(section);
    });

    graphEl.appendChild(row);
  });
}

// graph logic without ui
function drawGraph(MAX = 31, INIT = 1, daysPerWeek = 7): number[][] {
  let max = MAX;
  const weeks: number[][] = [];
  const week: number[] = [];

  if (INIT > daysPerWeek) return weeks;

  while (max > 0) {
    week.push(max);
    max -= daysPerWeek;
  }
  weeks.push(week);

  return weeks.concat(drawGraph(MAX - 1, INIT + 1));
}
