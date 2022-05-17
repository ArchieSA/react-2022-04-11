import Logo from "./img/logo.svg";
import styles from "./styles.module.scss";
import { Link } from "../../../../components/link/index";
import { ThemeContext } from "../../../theme/context";
import { useContext } from "react";

export const Header = () => {
  const theme = useContext(ThemeContext);

  return (
    <header className={styles.root}>
      <img src={Logo} className={styles.logo} alt="logo" />
      <Link label={"Basket"} href={"/basket"} />
    </header>
  );
};
