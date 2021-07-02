import React, { useState } from 'react';
import {MenuContainer, Icon,  } from './mobile-menu.styles';
import DropdownMenu from '../Dropdown-Menu/dropdown-menu';

const MobileMenu = () => (
  <MenuContainer>

    <NavItem icon={<Icon />}>
        <DropdownMenu></DropdownMenu>
    </NavItem>

  </MenuContainer>
);


function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <span>
      <a href="#" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </span>
  );
}



export default MobileMenu;