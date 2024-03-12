import { subtractDays } from "./dateController";

interface IData {
  [date: string]: number;
}

interface IParams {
  days: number;
  daysPerWeek: number;
  initDay: number;
  data?: IData;
}

export const generateGraph = (params: IParams): IData[][] => {
  let max = params.days;
  const weeks: IData[][] = [];
  const week: IData[] = [];

  if (params.initDay > params.daysPerWeek) return weeks;

  while (max >= 0) {
    week.push({
      [subtractDays(max).getDate().toString()]: 0,
    });
    max -= params.daysPerWeek;
  }
  weeks.push(week);

  return weeks.concat(
    generateGraph({
      days: params.days - 1,
      initDay: params.initDay + 1,
      daysPerWeek: params.daysPerWeek,
      data: params.data,
    })
  );
};
