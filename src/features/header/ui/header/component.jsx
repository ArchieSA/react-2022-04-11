import Logo from "./img/logo.svg";
import styles from "./styles.module.scss";
// import { ThemeContext } from "../../../theme/context";
// import { useContext } from "react";
import { Link } from "react-router-dom";


export const Header = () => {
  // const theme = useContext(ThemeContext);

  return (
    <header className={styles.root}>
      <Link to="/">
        <img src={Logo} className={styles.logo} alt="logo" />
      </Link>
      <div className={styles.linkBox}>
        <Link to={`restaurants`} className={styles.link}>Restaurants</Link>
        <Link to={`basket`} className={styles.link}>Basket</Link>
      </div>
    </header>
  );
};
