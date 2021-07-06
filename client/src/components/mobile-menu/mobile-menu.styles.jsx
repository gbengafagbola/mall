import styled from 'styled-components';

import { ReactComponent as MenuSvg } from '../../assets/menu.svg';

export const MenuContainer = styled.div`
display: none;

@media (max-width: 800px) {
  width: 42px;
  height: 42px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
`;

export const NavItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MenuSvg)`
  width: 24px;
  height: 24px;
`;