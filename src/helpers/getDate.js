const getDate = () => {
  const d = new Date();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const year = d.getFullYear();
  return `${month}/${day}/${year}`;
};

export { getDate };
