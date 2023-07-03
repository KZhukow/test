import RegistrationForm from './RegistrationForm/RegistrationForm';
import s from './style.module.css';
import { ReactComponent as BgIcon } from '../../assets/registration-form-bg-icon.svg';
import PageTitle from '../_Shared/PageTitle/PageTitle';

export default function RegistrationFormContainer() {
  return (
    <div className={s.container}>
      <div>
        <PageTitle
          subtitle="Use the form below to create your account."
          title="New user?"
        />
      </div>
      <RegistrationForm />
      <BgIcon className={s.bgSvg} />
    </div>
  );
}
