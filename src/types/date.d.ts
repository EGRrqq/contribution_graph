declare global {
  interface Date {
    getWeek(): number;
  }
}

Date.prototype.getWeek = function() {
  const date = this;
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const daysPassed = Math.round((date - firstDayOfYear) / oneDay);
  const weekNumber = Math.ceil((daysPassed + firstDayOfYear.getDay() + 1) / 7);

  return weekNumber;
};
