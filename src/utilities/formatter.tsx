export const thousandSeparator = (num: number) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
