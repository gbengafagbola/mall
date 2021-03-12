import React from 'react';
import Welcome from '../../components/welcome/welcome.component';
import Directory from '../../components/directory/directory.component';
import {HomeContainer} from './home.styles';

const HomePage = () => (

    <HomeContainer>
      <Welcome />
      <Directory />
    </HomeContainer>
);

export default HomePage; 