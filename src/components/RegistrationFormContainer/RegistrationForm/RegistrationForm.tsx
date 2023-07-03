/* eslint-disable no-console */
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IPostRegistrationBody } from './types';
import './style.css';
import { checkNewPass, emailRegex, passwordRegex, validateDate } from '../../../const/utils';
import { daysOfBirth, monthsOfBirth, nationalityData, newPasswordMinLength, requiredMsg, wrongPasswordMsgs, yearsOfBirth } from '../../../const/const';
import { ReactComponent as ShapeSvg } from '../../../assets/shape.svg';

const defaultValues: IPostRegistrationBody = {
  firstName: '',
  lastName: '',
  nationality: nationalityData[0],
  email: '',
  dayOfBirth: daysOfBirth[0].toString(),
  monthOfBirth: monthsOfBirth[0],
  yearOfBirth: String((new Date()).getFullYear()),
  gender: 'male',
  password: '',
  repeatPassword: '',
};

export default function RegistrationForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    clearErrors,
    getValues,
    watch,
    reset,
  } = useForm<IPostRegistrationBody>({ defaultValues });

  const [shakeButton, setShakeButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const email = watch('email');

  const onSubmit: SubmitHandler<IPostRegistrationBody> = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'server-ok.json',
        {
          method: 'GET',
          mode: 'no-cors',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      const result = await response.json();
      if (result.success) {
        reset();
        navigate('registered');
        console.log('Form submitted successfully', data);
      } else {
        console.log('Error submitting form:', result.error);
        setShakeButton(true);
      }
    } catch (error) {
      console.log('Error submitting form:', error);
      setShakeButton(true);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="registrationForm">
      <div className="formInputsContainer">
        <div className="formRow">
          <Controller
            rules={{ required: requiredMsg }}
            name="firstName"
            control={control}
            render={({ field }) => (
              <label htmlFor="firstName">
                First Name
                <input
                  {...field}
                  type="text"
                  id="firstName"
                  className={errors.firstName?.message ? 'error' : ''}
                />
                <div className="errorMsg">
                  {errors.firstName?.message}
                </div>
              </label>
            )}
          />
          <Controller
            rules={{ required: requiredMsg }}
            name="lastName"
            control={control}
            render={({ field }) => (
              <label htmlFor="lastName">
                Last Name
                <input
                  {...field}
                  type="text"
                  id="lastName"
                  className={errors.lastName?.message ? 'error' : ''}
                />
                <div className="errorMsg">
                  {errors.lastName?.message}
                </div>
              </label>
            )}
          />
        </div>
        <div className="formRow">
          <Controller
            rules={{ required: requiredMsg }}
            name="nationality"
            control={control}
            render={({ field }) => (
              <label htmlFor="nationality">
                Nationality
                <select
                  {...field}
                  id="nationality"
                  className={errors.nationality?.message ? 'error' : ''}
                >
                  {nationalityData.map((it) => (
                    <option key={it} value={it}>
                      {it}
                    </option>
                  ))}
                </select>
                <div className="errorMsg">
                  {errors.nationality?.message}
                </div>
              </label>
            )}
          />
          <Controller
            rules={{
              required: requiredMsg,
              pattern: {
                value: emailRegex,
                message:
                  'Invalid email',
              },
            }}
            name="email"
            control={control}
            render={({ field }) => (
              <label htmlFor="email">
                E-mail
                <input
                  {...field}
                  type="text"
                  id="email"
                  className={errors.email?.message ? 'error' : ''}
                />
                <div className="errorMsg">
                  {errors.email?.message}
                </div>
                {emailRegex.test(email) && <ShapeSvg className="shapeSvg" />}
              </label>
            )}
          />
        </div>
        <div className="formRow">
          <div className="birthDaySection">
            Date of Birth
            <div className="birthDayInputContainer">
              <Controller
                rules={{
                  validate: () => validateDate(getValues()),
                }}
                name="dayOfBirth"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    id="dayOfBirth"
                    className={errors.dayOfBirth?.message ? 'error' : ''}
                    style={{ width: '56px' }}
                  >
                    {daysOfBirth.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                )}
              />
              <Controller
                name="monthOfBirth"
                control={control}
                render={({ field: { onChange, ...other } }) => (
                  <select
                    {...other}
                    onChange={(e) => {
                      onChange(e);
                      clearErrors('dayOfBirth');
                    }}
                    id="monthOfBirth"
                  >
                    {monthsOfBirth.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                )}
              />
              <Controller
                name="yearOfBirth"
                control={control}
                render={({ field: { onChange, ...other } }) => (
                  <select
                    {...other}
                    onChange={(e) => {
                      onChange(e);
                      clearErrors('dayOfBirth');
                    }}
                    id="yearOfBirth"
                    style={{ width: '68px' }}
                  >
                    {yearsOfBirth.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            <div className="errorMsg">
              {errors.dayOfBirth?.message}
            </div>
          </div>
          <div className="genderSection">
            Gender
            <div className="genderInputContainer">
              <Controller
                name="gender"
                control={control}
                render={({ field: { value, onChange, ...other } }) => (
                  <label htmlFor="male" className="radioControlLabel">
                    <input
                      {...other}
                      onChange={onChange}
                      checked={value === 'male'}
                      type="radio"
                      id="male"
                      value="male"
                    />
                    <span>
                      Male
                    </span>
                  </label>
                )}
              />

              <Controller
                name="gender"
                control={control}
                render={({ field: { value, onChange, ...other } }) => (
                  <label htmlFor="female" className="radioControlLabel">
                    <input
                      {...other}
                      onChange={onChange}
                      checked={value === 'female'}
                      type="radio"
                      id="female"
                      value="female"
                    />
                    <span>
                      Female
                    </span>
                  </label>
                )}
              />
            </div>
          </div>
        </div>
        <div className="formRow">
          <Controller
            rules={{
              required: requiredMsg,
              minLength: {
                value: newPasswordMinLength,
                message: wrongPasswordMsgs.charactersCount,
              },
              pattern: {
                value: passwordRegex,
                message: wrongPasswordMsgs.charactersType,
              },
            }}
            name="password"
            control={control}
            render={({ field }) => (
              <label htmlFor="password">
                Password
                <input
                  {...field}
                  type="password"
                  id="password"
                  className={errors.password?.message ? 'error' : ''}
                />
                <div className="errorMsg">
                  {errors.password?.message}
                </div>
              </label>
            )}
          />
          <Controller
            rules={{
              required: requiredMsg,
              validate: (v) => checkNewPass(v, getValues('password')) || wrongPasswordMsgs.repeatedPassword,
            }}
            name="repeatPassword"
            control={control}
            render={({ field }) => (
              <label htmlFor="repeatPassword">
                Confirm Password
                <input
                  {...field}
                  type="password"
                  id="repeatPassword"
                  className={errors.repeatPassword?.message ? 'error' : ''}
                />
                <div className="errorMsg">
                  {errors.repeatPassword?.message}
                </div>
              </label>
            )}
          />
        </div>
      </div>
      <div className="formFooter">
        <p>
          Have an account?
          {' '}
          <span>Login</span>
        </p>
        <button
          className={`submitBtn ${shakeButton ? 'shake' : ''}`}
          type="submit"
          onAnimationEnd={() => setShakeButton(false)}
          disabled={isLoading}
        >
          Complete Signup
        </button>
      </div>
    </form>
  );
}
