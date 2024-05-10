export const insertComma = (targetCount: number) => {
  return targetCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
