import { SwitchButton } from "./SwitchButton";
import Styles from "./Switch.module.scss";

export const SwitchToggle = ({ options, value, onChange }) => {
  return (
    <div className={Styles.switch}>
      <div className={Styles.switch__container}>
        {options.map((opt) => (
          <SwitchButton
            key={opt.value}
            option={opt}
            active={value === opt.value}
            onSelect={onChange}
          />
        ))}
      </div>
    </div>
  );
};
