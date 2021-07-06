import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Dropdown, Menu, Shop, ChevronSvg, MenuItem, IconButton, IconRight, Camera, Designer } from './dropdown-menu.styles';

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
          <DropdownItem leftIcon={<Shop />}  goToMenu="settings"> shop </DropdownItem>
          <DropdownItem leftIcon={<Camera />}  goToMenu="settings">blog</DropdownItem>
          {/* <DropdownItem leftIcon={<Shop />}  goToMenu="settings">CONTACTS</DropdownItem> */}
          <DropdownItem leftIcon={<Designer />} rightIcon={<ChevronSvg />} goToMenu="settings">designer</DropdownItem>
        </Menu>

      </CSSTransition>

    
      <CSSTransition in={activeMenu === 'settings'} timeout={500} classNames="menu-secondary" unmountOnExit onEnter={calcHeight}>
   
        <Menu>
          <DropdownItem goToMenu="main" leftIcon={<Shop />}>
            <h2>Designers</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<Shop />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<Shop />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<Shop />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<Shop />}>Awesome!</DropdownItem>
        </Menu>

      </CSSTransition>

    </Dropdown>
  );
}


export default DropdownMenu;