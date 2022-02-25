const parseStringToLocaleDate = (date: string) => {
  const parsedDate = new Date(parseInt(date, 10));
  return parsedDate.toLocaleDateString();
};

export default { parseStringToLocaleDate };
