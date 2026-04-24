import { Icon } from "../Icon";
import Styles from "./Switch.module.scss";
import clsx from "clsx";

export const SwitchButton = ({ option, active, onSelect }) => {
  const handleOptionClick = () => onSelect(option.value);
  return (
    <button
      onClick={handleOptionClick}
      className={clsx(Styles.switchButton, {
        [Styles["switchButton--active"]]: active,
      })}
    >
      {option.iconName && <Icon name={option.iconName} />}
      <span className={Styles.switchButton__label}>{option.label}</span>
    </button>
  );
};
