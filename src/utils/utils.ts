export const formatYear = (date: Date | number | 'present') => {
  if (date === 'present') return date;
  if (date instanceof Date) return date.getFullYear();
  return date;
};
