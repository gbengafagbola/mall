import React from 'react';

import {WishListContainer, WishIcon, ItemCountContainer } from './wishlist-icon.styles';


const WishListIcon = () => (
  <WishListContainer>
    <WishIcon />
    <ItemCountContainer></ItemCountContainer>
  </WishListContainer>
);

export default WishListIcon;