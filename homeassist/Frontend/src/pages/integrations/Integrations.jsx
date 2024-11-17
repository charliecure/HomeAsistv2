import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaHubspot, FaLightbulb, FaThermometerHalf, FaCamera, FaLock, FaPlug, FaPlus } from 'react-icons/fa';
import { MdSpeaker } from 'react-icons/md';
import IntegrationModal from '../../components/integrations/IntegrationModal';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const IntegrationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const IntegrationCard = styled.div`
  background: var(--card-background);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
  cursor: pointer;
  transition: transform 0.2s;
  display: flex;
  align-items: start;
  gap: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

const IconWrapper = styled.div`
  color: var(--primary-color);
  font-size: 2rem;
  padding: 0.5rem;
  background: rgba(3, 169, 244, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  color: var(--text-primary);
`;

const Description = styled.p`
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
`;

const Status = styled.span`
  font-size: 0.8rem;
  color: ${props => props.connected ? '#4caf50' : '#9e9e9e'};
  display: block;
  margin-top: 0.5rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0288d1;
  }

  svg {
    font-size: 1.2rem;
  }
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

const integrations = [
  {
    id: 1,
    name: 'Philips Hue Bridge',
    description: 'Connect your Philips Hue smart lights and accessories through the Hue Bridge.',
    icon: <FaHubspot />,
    connected: true
  },
  {
    id: 2,
    name: 'LIFX Smart Lights',
    description: 'Control your LIFX smart bulbs and light strips directly over WiFi.',
    icon: <FaLightbulb />,
    connected: false
  },
  {
    id: 3,
    name: 'Nest Thermostat',
    description: 'Manage your home temperature and energy usage with Nest integration.',
    icon: <FaThermometerHalf />,
    connected: true
  },
  {
    id: 4,
    name: 'Ring Security',
    description: 'Monitor your Ring doorbells, cameras, and security devices.',
    icon: <FaCamera />,
    connected: false
  },
  {
    id: 5,
    name: 'Yale Smart Locks',
    description: 'Control and monitor your Yale smart locks and door access.',
    icon: <FaLock />,
    connected: false
  },
  {
    id: 6,
    name: 'Sonos Speakers',
    description: 'Control your Sonos speakers and audio throughout your home.',
    icon: <MdSpeaker />,
    connected: true
  },
  {
    id: 7,
    name: 'Smart Plugs',
    description: 'Control any device connected to your smart plugs.',
    icon: <FaPlug />,
    connected: true
  }
];

const Integrations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <Header>
        <Title>Integrations</Title>
        <AddButton onClick={() => setIsModalOpen(true)}>
          <FaPlus />
          Add New Integration
        </AddButton>
      </Header>

      <IntegrationsGrid>
        {integrations.map(integration => (
          <IntegrationCard key={integration.id}>
            <IconWrapper>
              {integration.icon}
            </IconWrapper>
            <Content>
              <Title>{integration.name}</Title>
              <Description>{integration.description}</Description>
              <Status connected={integration.connected}>
                {integration.connected ? '● Connected' : '○ Not Connected'}
              </Status>
            </Content>
          </IntegrationCard>
        ))}
      </IntegrationsGrid>

      {isModalOpen && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <h2>Add New Integration</h2>
              <CloseButton onClick={() => setIsModalOpen(false)}>&times;</CloseButton>
            </ModalHeader>
            <IntegrationModal onClose={() => setIsModalOpen(false)} />
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default Integrations;
