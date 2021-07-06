import styled from 'styled-components';

import { ReactComponent as SearchSvg } from '../../assets/search.svg';

export const SearchContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 800px){
    display: none;
  }
`;

export const Icon = styled(SearchSvg)`
  width: 24px;
  height: 24px;
`;