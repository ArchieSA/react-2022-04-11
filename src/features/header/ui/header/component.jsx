import { useContext } from 'react';
import { ThemeContext } from "../../../theme/context";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../consts/routes";
import { ToggleThemeButtonContainer } from '../../../theme/ui/toggle-theme/container';
import cn from 'classnames';
import Logo from "./img/logo.svg";
import styles from "./styles.module.scss";


export const Header = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <header className={cn(styles.root, {[styles.lightTheme]: theme === `light`})}>
      <Link to="/">
        <img src={Logo} className={styles.logo} alt="logo" />
      </Link>
      <div className={styles.linkBox}>
        <Link to={ROUTES.Restaurants} className={styles.link}>Restaurants</Link>
        <Link to={ROUTES.AllMenu} className={styles.link}>All menu</Link>
        <Link to={ROUTES.Basket} className={styles.link}>Basket</Link>
        <ToggleThemeButtonContainer />
      </div>
    </header>
  );
};
