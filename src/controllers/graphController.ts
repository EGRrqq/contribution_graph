interface IGroups {
  [key: string]: Date[];
}

interface IGraphController {
  getWeeks(dates: string[]): IGroups;
}

class GraphController implements IGraphController {
  getWeeks = (dates: string[]): IGroups =>
    dates.reduce((acc: IGroups, d) => {
      const date = new Date(Date.parse(d));
      const yearWeek = `${date.getFullYear()}-${date.getWeek()}`;

      if (!acc[yearWeek]) {
        acc[yearWeek] = [];
      }

      acc[yearWeek][date.getDay()] = date;

      return acc;
    }, {});
}

export const graphController = new GraphController();
