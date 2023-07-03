import RegistrationForm from './RegistrationForm/RegistrationForm';
import s from './style.module.css';
import { ReactComponent as BgIcon } from '../../assets/registration-form-bg-icon.svg';

export default function RegistrationFormContainer() {
  return (
    <div className={s.container}>
      <div>
        <h2 className={s.title}>
          New user?
        </h2>
        <div className={s.subtitle}>
          Use the form below to create your account.
        </div>
      </div>
      <RegistrationForm />
      <BgIcon className={s.bgSvg} />
    </div>
  );
}
