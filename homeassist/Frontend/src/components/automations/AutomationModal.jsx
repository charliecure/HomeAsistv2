import React, { useState } from 'react';
import styled from '@emotion/styled';
import { 
  FaLightbulb, 
  FaThermometerHalf, 
  FaDoorOpen, 
  FaCamera, 
  FaLock,
  FaPlug,
  FaVolumeMute,
  FaClock,
  FaSun,
  FaMoon
} from 'react-icons/fa';

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const IntegrationsList = styled.div`
  max-height: 400px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const IntegrationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background: ${props => props.selected ? 'rgba(3, 169, 244, 0.1)' : 'white'};
  border: 1px solid ${props => props.selected ? 'var(--primary-color)' : '#e0e0e0'};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(3, 169, 244, 0.05);
    transform: translateX(5px);
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.selected ? 'var(--primary-color)' : '#f5f5f5'};
  color: ${props => props.selected ? 'white' : 'var(--primary-color)'};
  border-radius: 8px;
  margin-right: 1rem;
  font-size: 1.2rem;
`;

const IntegrationInfo = styled.div`
  flex: 1;
`;

const IntegrationName = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: var(--text-primary);
`;

const IntegrationDescription = styled.p`
  margin: 0.25rem 0 0 0;
  font-size: 0.85rem;
  color: var(--text-secondary);
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;

  ${props => props.primary ? `
    background: var(--primary-color);
    color: white;
    &:hover {
      background: #0288d1;
    }
  ` : `
    background: #f5f5f5;
    color: var(--text-primary);
    &:hover {
      background: #e0e0e0;
    }
  `}
`;

const integrations = [
  {
    id: 1,
    name: 'Smart Lights',
    description: 'Control lights based on time, motion, or other triggers',
    icon: <FaLightbulb />
  },
  {
    id: 2,
    name: 'Thermostat',
    description: 'Automate temperature based on schedule or presence',
    icon: <FaThermometerHalf />
  },
  {
    id: 3,
    name: 'Doors & Windows',
    description: 'Automate doors and windows based on conditions',
    icon: <FaDoorOpen />
  },
  {
    id: 4,
    name: 'Security Cameras',
    description: 'Trigger recording or notifications based on events',
    icon: <FaCamera />
  },
  {
    id: 5,
    name: 'Smart Locks',
    description: 'Automatically lock/unlock based on presence or schedule',
    icon: <FaLock />
  },
  {
    id: 6,
    name: 'Smart Plugs',
    description: 'Control appliances based on time or events',
    icon: <FaPlug />
  },
  {
    id: 7,
    name: 'Audio Control',
    description: 'Automate volume and audio settings',
    icon: <FaVolumeMute />
  },
  {
    id: 8,
    name: 'Time-based',
    description: 'Create schedules for any connected device',
    icon: <FaClock />
  },
  {
    id: 9,
    name: 'Sunrise/Sunset',
    description: 'Trigger actions based on natural light',
    icon: <FaSun />
  },
  {
    id: 10,
    name: 'Night Mode',
    description: 'Configure night time automations',
    icon: <FaMoon />
  }
];

const AutomationModal = ({ onClose }) => {
  const [selectedIntegration, setSelectedIntegration] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIntegrations = integrations.filter(integration =>
    integration.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ModalContent>
      <SearchInput
        type="text"
        placeholder="Search integrations..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <IntegrationsList>
        {filteredIntegrations.map(integration => (
          <IntegrationItem
            key={integration.id}
            selected={selectedIntegration?.id === integration.id}
            onClick={() => setSelectedIntegration(integration)}
          >
            <IconWrapper selected={selectedIntegration?.id === integration.id}>
              {integration.icon}
            </IconWrapper>
            <IntegrationInfo>
              <IntegrationName>{integration.name}</IntegrationName>
              <IntegrationDescription>{integration.description}</IntegrationDescription>
            </IntegrationInfo>
          </IntegrationItem>
        ))}
      </IntegrationsList>

      <ActionButtons>
        <Button onClick={onClose}>Cancel</Button>
        <Button 
          primary 
          disabled={!selectedIntegration}
          onClick={() => {
            if (selectedIntegration) {
              console.log('Selected:', selectedIntegration);
              onClose();
            }
          }}
        >
          Continue
        </Button>
      </ActionButtons>
    </ModalContent>
  );
};

export default AutomationModal;
