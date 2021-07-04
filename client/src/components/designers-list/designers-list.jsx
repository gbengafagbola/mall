import React from 'react';

import { Dropdown, Menu, IconX, MenuItem, IconButton, IconRight } from './designers-list.styles';

const DesignersList = ({ item: { imageUrl, price, name, quantity } }) => (

  <Menu>
    <DropdownItem goToMenu="main" leftIcon={<IconX />}>
      <h2>Designers</h2>
    </DropdownItem>
    <DropdownItem leftIcon={<IconX />}>HTML</DropdownItem>
    <DropdownItem leftIcon={<IconX />}>CSS</DropdownItem>
    <DropdownItem leftIcon={<IconX />}>JavaScript</DropdownItem>
    <DropdownItem leftIcon={<IconX />}>Awesome!</DropdownItem>
</Menu>

);

export default DesignersList;