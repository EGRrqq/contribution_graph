import './style.css'

// date stuff
declare global {
  interface Date {
    getWeek(): number;
  }
}

Date.prototype.getWeek = function() {
  const onejan = new Date(this.getFullYear(), 0, 1);
  return Math.ceil((((this.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
}

const today = new Date();
const subtractDays = (n: number) =>
  new Date(new Date().setDate(today.getDate() - n));

const formatDate = (date: Date) =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;


const getLastDates = (days: number) => {
  const dates = [];
  while (days >= 0) {
    dates.push(formatDate(subtractDays(days)));
    days--;
  }

  return dates;
}


// graph stuff
interface IGroups {
  [key: string]: Date[];
}
window.addEventListener("load", init, { once: true });

const dates = getLastDates(30);
const groups: IGroups = dates.reduce((acc: IGroups, d) => {
  const date = new Date(Date.parse(d));
  const yearWeek = `${date.getFullYear()}-${date.getWeek()}`;

  if (!acc[yearWeek]) {
    acc[yearWeek] = [];
  }

  acc[yearWeek][date.getDay()] = date;

  return acc;

}, {});

function init() {
  const graphEl = document.getElementById("graph");
  if (!graphEl) return;

  Object.values(groups).forEach((c, ci) => {
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
console.log(groups);
