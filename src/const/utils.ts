import { IPostRegistrationBody } from '../components/RegistrationFormContainer/RegistrationForm/types';
import { monthsOfBirth } from './const';

export function checkNewPass(newPass1: string | null, newPass2: string | null) {
  return newPass1 === newPass2;
}

export function validateDate(data: IPostRegistrationBody) {
  const { dayOfBirth, monthOfBirth, yearOfBirth } = data;
  const date = new Date(
    parseInt(yearOfBirth, 10),
    monthsOfBirth.indexOf(monthOfBirth),
    parseInt(dayOfBirth, 10),
  );
  return (
    (date.getFullYear() === parseInt(yearOfBirth, 10)
    && date.getMonth() === monthsOfBirth.indexOf(monthOfBirth)
    && date.getDate() === parseInt(dayOfBirth, 10)) || 'Wrong date'
  );
}

export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
