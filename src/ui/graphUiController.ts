import { IGroups } from "../controllers";

export function drawGraph(weeks: IGroups) {
  const graphEl = document.getElementById("graph");
  if (!graphEl) return;

  Object.values(weeks).forEach((c, ci) => {
    const col = document.createElement("div");

    c.forEach((n, ri) => {
      const section = document.createElement("section");
      section.textContent = n.getDate().toString();

      section.style.gridArea = `${ri + 1}/${ci + 1}`;

      // merge columns or separate view
      if (`${n.getMonth()}-${n.getDate()}` === "11-31" && n.getDay() != 6) {
        col.style.gridArea = `1/${ci + 2}`;
      } else {
        col.style.gridArea = `1/${ci + 1}`;
      }
      col.appendChild(section);
    });

    graphEl.appendChild(col);
  });
}
