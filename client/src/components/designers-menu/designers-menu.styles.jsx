import styled from 'styled-components';

import { ReactComponent as MenuSvg } from '../../assets/menu.svg';

export const MenuContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Icon = styled(MenuSvg)`
  width: 24px;
  height: 24px;
`;