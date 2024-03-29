import styled from 'styled-components';

import { ReactComponent as LockSvg } from '../../assets/lock.svg';

export const LockContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const LockIcon = styled(LockSvg)`
  width: 24px;
  height: 24px;
`;

