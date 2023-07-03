import s from './style.module.css';

export default function LinkToLogin() {
  return (
    <p className={s.title}>
      Have an account?
      {' '}
      <span className={s.titleLink}>Login</span>
    </p>
  );
}
