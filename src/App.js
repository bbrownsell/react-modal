import React, { useState } from 'react';
import Modal from './components/Modal';
import styled from 'styled-components';
import { GlobalStyle} from './components/globalStyles';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  }
  return (
      <>
        <Container>
          <Button onClick={openModal}>Click me</Button>
          <Modal showModal={showModal} setShowModal={setShowModal}/>
          <GlobalStyle/>
        </Container>

      </>
  );
}

export default App;
