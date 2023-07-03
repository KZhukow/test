import LinkToLogin from '../_Shared/LinkToLogin/LinkToLogin';
import PageTitle from '../_Shared/PageTitle/PageTitle';
import s from './style.module.css';

export default function RegisteredPage() {
  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <PageTitle
          title="Thank You!"
          subtitle="you registered!"
        />
      </div>
      <LinkToLogin />
    </div>
  );
}
