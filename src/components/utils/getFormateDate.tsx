export const getFormateDate = () => {
  let date = new Date();

  return (
    parseInt(date.getDate() + '') +
    '/' +
    parseInt(date.getMonth() + 1 + '') +
    '/' +
    date.getFullYear()
  );
};
