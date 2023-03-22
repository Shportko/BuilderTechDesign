export const getDateTimeShort = (dateString: string) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = date.getDay();
  const hour = date.getHours();
  const min = date.getMinutes();
  let formattedMin = "";
  if (min < 10) {
    formattedMin = `0${min}`;
  } else {
    formattedMin = `${min}`;
  }

  return `${month} ${day}, ${year} | ${hour}:${formattedMin}`;
};
