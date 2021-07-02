import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import WishListIcon from '../wishlist-icon/wishlist-icon.component';
import SearchIcon from '../search-icon/search-icon.component';
import MobileMenu from '../mobile-menu/mobile-menu.component';
import UserUnlock from '../user-unlocked/user-unlocked.component';
import UserLock from '../user-lock/user.lock.component';

import Cart from '../cart/cart.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import  {ReactComponent as Logo} from '../../assets/crown.svg';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink, IconsContainer} from './header.styles';

 
const Header = ({currentUser, hidden, signOutStart}) => (
  <HeaderContainer>

    <MobileMenu />

    <OptionsContainer>
      
      <OptionLink as='div' to="/shop">COLLECTION</OptionLink>
      <OptionLink as='div' to="/shop">SHOP</OptionLink>
      <OptionLink as='div' to="/shop">BLOG</OptionLink>
      {/* <OptionLink to="/shop">CONTACT</OptionLink> */}

    </OptionsContainer>

    <LogoContainer to="/">
      <Logo className='logo'/>
    </LogoContainer>

    <IconsContainer>

      <SearchIcon />
      {
        currentUser ? (
        <OptionLink onClick={signOutStart}><UserUnlock/></OptionLink>
        ) : (
        <OptionLink to='/signin'><UserLock/></OptionLink>
        )
      }
      <WishListIcon />
      <CartIcon />

    </IconsContainer>

    {hidden ? null : <Cart />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);