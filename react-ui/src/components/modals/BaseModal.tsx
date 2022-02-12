import React, { useRef } from 'react';
import styled from 'styled-components';
import { useClickaway } from '../../hooks/useClickaway';
import { X } from 'react-feather';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  handler: Function;
}

const BaseModal = ({ handler, children, title = '' }: ModalProps) => {
  const ref = useRef(null);

  const [callback] = useClickaway(ref, handler);

  return (
    <>
      <Curtain />
      <div ref={ref}>
        <Modal>
          <Container>
            <ModalHeader>
              <h3>{title}</h3>
              <CloseButton onClick={callback}>
                <X size={30} />
              </CloseButton>
            </ModalHeader>
            <ModalContent>{children}</ModalContent>
          </Container>
        </Modal>
      </div>
    </>
  );
};

const Modal = styled.div`
  animation: fadeInUp 0.3s ease-in-out forwards;
  background: #fff;
  border-radius: 1rem;
  border-top: 0.5rem solid ${({ theme }) => theme.colors.highlight_iceblue};
  box-shadow: ${({ theme }) => theme.shadows.depth_1};
  height: auto;
  left: 50%;
  min-width: 20rem;
  padding: 1rem 2.5rem;
  position: fixed;
  top: 50%;
  width: 50vmin;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  z-index: 10000;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem 0;

  h3 {
    font-weight: 400;
    font-size: 1.6rem;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const CloseButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.highlight_iceblue};

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const Curtain = styled.div`
  animation: fadeIn 0.3s ease-in-out forwards;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.highlight_blue};
`;

export default BaseModal;
