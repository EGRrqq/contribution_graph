interface IDateController {
  getLastDates(days: number): string[];
}

class DateController implements IDateController {
  #subtractDays = (n: number) => {
    const today = new Date();
    return new Date(new Date().setDate(today.getDate() - n));
  }

  #formatDate = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  getLastDates = (days: number): string[] => {
    const dates = [];
    while (days >= 0) {
      dates.push(this.#formatDate(this.#subtractDays(days)));
      days--;
    }

    return dates;
  };
}

export const dateController = new DateController();
