import "./style.css";
import "./types";

import { dateController, graphController } from "./controllers";
import { drawGraph } from "./ui/graphUiController";

window.addEventListener("load", () => drawGraph(weeks), { once: true });

const dates = dateController.getLastDates(100);
const weeks = graphController.getWeeks(dates);
