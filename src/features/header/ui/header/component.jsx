import Logo from "./img/logo.svg";
import styles from "./styles.module.scss";
// import { ThemeContext } from "../../../theme/context";
// import { useContext } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../consts/routes";


export const Header = () => {
  // const theme = useContext(ThemeContext);

  return (
    <header className={styles.root}>
      <Link to="/">
        <img src={Logo} className={styles.logo} alt="logo" />
      </Link>
      <div className={styles.linkBox}>
        <Link to={ROUTES.Restaurants} className={styles.link}>Restaurants</Link>
        <Link to={ROUTES.Basket} className={styles.link}>Basket</Link>
      </div>
    </header>
  );
};
