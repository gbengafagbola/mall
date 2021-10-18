import React, { useState } from 'react';
import { More } from './more-icon.styles';

import { Modal } from '../modal/modal.component';



function MoreSvg() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return(
    <container>
      <More onClick={openModal} />
      <Modal  showModal={showModal} setShowModal={setShowModal}/>
    </container>
    );
  };



export default MoreSvg;