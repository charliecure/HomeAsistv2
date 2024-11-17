import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaPlus } from 'react-icons/fa';
import AutomationModal from '../../components/automations/AutomationModal';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const NewAutomationCard = styled.div`
  border: 2px dashed var(--primary-color);
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  background-color: rgba(3, 169, 244, 0.05);

  &:hover {
    background-color: rgba(3, 169, 244, 0.1);
  }
`;

const PlusIcon = styled(FaPlus)`
  color: var(--primary-color);
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: var(--primary-color);
  font-size: 1.2rem;
  margin: 0;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-secondary);
  
  &:hover {
    color: var(--text-primary);
  }
`;

const Automations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewAutomation = () => {
    setIsModalOpen(true);
  };

  return (
    <Container>
      <NewAutomationCard onClick={handleNewAutomation}>
        <PlusIcon />
        <Text>Create New Automation</Text>
      </NewAutomationCard>

      {isModalOpen && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <h2>New Automation</h2>
              <CloseButton onClick={() => setIsModalOpen(false)}>&times;</CloseButton>
            </ModalHeader>
            <AutomationModal onClose={() => setIsModalOpen(false)} />
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default Automations;
