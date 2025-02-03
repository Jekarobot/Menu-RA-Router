import { MenuItem } from "../MenuItem/MenuItem";


function Menu() {  
    const menuItems = [
        { label: 'Главная', link: '/' },
        { label: 'Дрифт-такси', link: '/drift' },
        { label: 'Time Attack', link: '/timeattack' },
        { label: 'Forza Karting', link: '/forza' },
        ];

    return (
            <ul className="menu">
                {menuItems.map((item, index) => (
                    <MenuItem key={index} label={item.label} link={item.link} />
                ))}
            </ul>
    );
  }

export default Menu;