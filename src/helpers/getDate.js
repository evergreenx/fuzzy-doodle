const getDate = () => {
  const date = new Date();
  const day = date.getUTCDate();
  const dayofWeek = date.getDay();

  const year = date.getFullYear();

  const dayString = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const longMonth = date.toLocaleString("en-us", {
    month: "long",
  });
  return {
    day: day,
    year: year,
    month: longMonth,
    dayString: dayString[dayofWeek],
  };
};

export { getDate };
