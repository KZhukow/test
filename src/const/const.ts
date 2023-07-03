export const requiredMsg = 'It should have been filled';
export const wrongPasswordMsgs = {
  charactersCount: 'Password must contain at least 8 characters',
  charactersType: 'Password must contain upper and lower case letters and numbers',
  repeatedPassword: 'Incorrectly password',
};
export const newPasswordMinLength = 8;

export const daysOfBirth = [...Array(31).fill(null)].map((_, i) => i + 1);
export const monthsOfBirth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const yearsOfBirth = [...Array(100).fill(null)].map((_, i) => new Date().getFullYear() - i);

export const nationalityData = [
  'Chinese',
  'Indian',
  'American',
  'Indonesian',
  'Brazilian',
  'Pakistani',
  'Nigerian',
  'Bangladeshi',
  'Russian',
  'Japanese',
];
