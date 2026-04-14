import clsx from "clsx";
import Styles from "./Card.module.scss";

export const Card = ({
  title,
  subtitle,
  description,
  date,
  children,
  className,
}) => {
  return (
    <div className={clsx(Styles.card, className)}>
      <div className={Styles.cardContent}>
        <div className={Styles.cardHeader}>
          <div className={Styles.cardTitleWrapper}>
            <h3 className={Styles.cardTitle}>{title}</h3>
            <span className={Styles.cardSubtitle}>{subtitle}</span>
          </div>
          {date ? <span className={Styles.cardDate}>{date}</span> : null}
        </div>
        <span className={Styles.cardDescription}>{description}</span>
      </div>
      {children}
    </div>
  );
};
