import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Dropdown, Menu, IconX, MenuItem, IconButton, IconRight, MenuPrimary } from './dropdown-menu.styles';

import './dropdown-menu.styles';

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <MenuItem>
        <a href="#" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <IconButton>{props.leftIcon}</IconButton>
          {props.children}
          <IconRight>{props.rightIcon}</IconRight>
        </a>
     </MenuItem>
    );
  }

  return (
    <Dropdown style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition in={activeMenu === 'main'} timeout={500} classNames="menu-primary" unmountOnExit onEnter={calcHeight}>
 
        <Menu>
          {/* <DropdownItem>My Profile</DropdownItem> */}
          <DropdownItem leftIcon={<IconX />}  goToMenu="animals"> SHOP </DropdownItem>
          <DropdownItem leftIcon={<IconX />}  goToMenu="settings">BLOG</DropdownItem>
          <DropdownItem leftIcon={<IconX />}  goToMenu="settings">DESIGNERS</DropdownItem>
          <DropdownItem leftIcon={<IconX />}  goToMenu="settings">COLLECTIONS</DropdownItem>

        </Menu>

      </CSSTransition>

    
      <CSSTransition in={activeMenu === 'settings'} timeout={500} classNames="menu-secondary" unmountOnExit onEnter={calcHeight}>
   
        <Menu>
          <DropdownItem goToMenu="main" leftIcon={<IconX />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<IconX />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<IconX />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<IconX />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<IconX />}>Awesome!</DropdownItem>
        </Menu>

      </CSSTransition>


      <CSSTransition in={activeMenu === 'animals'} timeout={500} classNames="menu-secondary" unmountOnExit onEnter={calcHeight}>
      
        <Menu>
          <DropdownItem goToMenu="main" leftIcon={<IconX />}> <h2>Animals</h2> </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </Menu>

      </CSSTransition>
    </Dropdown>
  );
}


export default DropdownMenu;