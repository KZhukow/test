import s from './style.module.css';

interface IPageTitleProps {
  title: string,
  subtitle: string,
}

export default function PageTitle({
  subtitle,
  title,
}: IPageTitleProps) {
  return (
    <>
      <h2 className={s.title}>
        {title}
      </h2>
      <div className={s.subtitle}>
        {subtitle}
      </div>
    </>
  );
}
