export const getTeamData = (min: number, max: number): string => {
  if (min === max) {
    return `${min}`;
  }
  return `${min} - ${max}`;
};
