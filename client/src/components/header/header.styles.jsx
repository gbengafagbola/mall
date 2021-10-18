import styled from 'styled-components';

import {Link} from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    padding-top: 20px;
    display: flex;
    margin-botttom: 5px;
    // position: fixed;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  align-items: center;

  @media screen and (max-width: 800px) {
    height: 100%;
    width: 50px;
    padding-top: 0px;
    padding-left: auto;
    padding-right: auto;
    justify-items: center;
    align-items: center;
  
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 800px) {
    width: 80%;
    display: none;
  }
`;

export const IconsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px){
    padding: 0px;
  }
`;


export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  
  @media screen and (max-width: 800px){
    padding-left: 0px;
    padding-right: 0px;
  }
`;

