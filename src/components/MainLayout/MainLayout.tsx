import { Outlet } from 'react-router-dom';

import s from './style.module.css';

export default function MainLayout() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.leftPanel}>
          <h1 className={s.leftPanelTitle}>Sign up</h1>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
