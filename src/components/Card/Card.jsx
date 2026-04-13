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
          <div className={Styles.cardTitle}>
            <h3>{title}</h3>
            {date ? <span>{date}</span> : null}
          </div>
          <span className={Styles.cardSubtitle}>{subtitle}</span>
        </div>
        <span className={Styles.cardDescription}>{description}</span>
      </div>
      {children}
    </div>
  );
};
