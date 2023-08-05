export const parseDates = (str: string): string[] => {
  const matches: string[] = [];
  let res = str.match(/[1-3]?[0-9]\/[1]?[0-9]\/\d{4}/g);
  if (res) {
    res.forEach((element) => {
      matches.push(element.toString());
    });
  }
  return matches;
};
