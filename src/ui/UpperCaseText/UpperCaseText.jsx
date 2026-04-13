import Styles from "./UpperCaseText.module.scss";

export const UpperCaseText = ({ children }) => (
  <span className={Styles.uppercaseText}>{children}</span>
);
