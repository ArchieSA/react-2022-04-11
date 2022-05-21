import { useContext } from 'react';
import { ThemeContext } from "../../context";
import { ToggleThemeButton } from './component';
import cn from 'classnames';
import styles from "./styles.module.scss";


export const ToggleThemeButtonContainer = () => {
  const [
    theme, setTheme]  = useContext(ThemeContext),
    handleToggleTheme = () => setTheme(prev => prev === `light` ? `dark` : `light`);

  return (
    <ToggleThemeButton
      theme     = {theme}
      className = {cn(styles.root, {[styles.lightTheme]: theme === `light`})}
      onToggle  = {handleToggleTheme}
    />
  );
};
