import "./style.css";

// date stuff
const today = new Date();
const substractDays = (n: number) =>
  new Date(new Date().setDate(today.getDate() - n));
const formatDate = (date: Date) =>
  `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

// graph stuff
const graph = document.getElementById("graph") as HTMLElement;
[...graph.children].forEach((s, i) => {
  s.textContent = formatDate(substractDays(i));
});
