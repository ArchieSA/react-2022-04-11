import { LinkContainer } from '../../../custom-routing/ui/link/container';
import styles from './styles.module.scss';
import cn from 'classnames';

export const Tab = ({ label, onTabSelect, href, isSelected,  className }) => {
  return(
    <LinkContainer
      href       = {href}
      label      = {label}
      className  = {cn(styles.root, {[styles.selected]: isSelected}, className)}
      onClick    = {onTabSelect}
    />
  );
};
