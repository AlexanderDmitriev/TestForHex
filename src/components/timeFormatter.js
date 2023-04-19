export const timeFormatter = values => {
  const date = new Date(0);
  date.setMinutes(values.preparation_time);
  return date.toISOString().substr(11, 8);
};
