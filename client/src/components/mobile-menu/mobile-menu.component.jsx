import React, { useState, useEffect, useRef, useCallback } from 'react';
import {useSpring, animted} from 'react-spring';

import {MenuContainer, Icon,  } from './mobile-menu.styles';
import DropdownMenu from '../dropdown-menu/dropdown-menu';
import { Modal } from '../modal/modal.component';

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

