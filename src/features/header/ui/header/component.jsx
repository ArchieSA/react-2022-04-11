import Logo from "./img/logo.svg";
import styles from "./styles.module.scss";
import { ThemeContext } from "../../../theme/context";
import { useContext } from "react";

export const Header = () => {
  const theme = useContext(ThemeContext);

  return (
    <header className={styles.root}>
      <img src={Logo} className={styles.logo} alt="logo" />
    </header>
  );
};
