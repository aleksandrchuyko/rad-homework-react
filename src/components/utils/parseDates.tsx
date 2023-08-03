export const parseDates = (str: string) => {
  const matches = [];
  matches.push(str.match(/[1-3]?[0-9]\/[1]?[0-9]\/\d{4}/g));

  return matches;
};