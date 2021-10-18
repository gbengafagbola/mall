import React from 'react';
import Welcome from '../../components/welcome/welcome.component';
import Directory from '../../components/directory/directory.component';
import {HomeContainer} from './home.styles';
// import Header from '../../components/header/header.component';

const HomePage = () => (

    <HomeContainer>
      {/* <Header /> */}
      <Welcome />
      <Directory />
    </HomeContainer>
);

export default HomePage; 