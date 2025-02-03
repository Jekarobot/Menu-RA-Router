import { NavLink } from "react-router-dom";

interface MenuItemProps {
    label: string;
    link: string;
}

export const MenuItem = ({ label, link }: MenuItemProps) => {

    const isActive = ({ isActive }: { isActive: boolean }) => {
        return isActive ? 'menu__item-active' : 'menu__item';
    }
    
  return (
    <NavLink to={link} className={isActive}>{label}</NavLink>
  );
}