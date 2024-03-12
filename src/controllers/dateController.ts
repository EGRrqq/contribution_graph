const today = new Date();

export const subtractDays = (n: number) =>
  new Date(new Date().setDate(today.getDate() - n));

export const formatDate = (date: Date) =>
  `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
