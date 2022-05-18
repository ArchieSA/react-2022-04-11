import Logo from "./img/logo.svg";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export const Header = () => (
  <header className={styles.root}>
    <div>
      <Link to="/">
        <img src={Logo} className={styles.logo} alt="logo" />
      </Link>
    </div>
    <div>
      <Link to="/restaurants" className={styles.link}>
        Restaurants
      </Link>
      <Link to="/menu" className={styles.link}>
        Menu
      </Link>
      <Link to="/basket" className={styles.link}>
        Basket
      </Link>
    </div>
  </header>
);
