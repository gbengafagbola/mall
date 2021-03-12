import styled from 'styled-components';

import { ReactComponent as UnlockSvg } from '../../assets/unlock.svg';

export const UnlockContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const UnlockIcon = styled(UnlockSvg)`
  width: 24px;
  height: 24px;
`;

