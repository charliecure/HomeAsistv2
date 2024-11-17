import React, { useState } from 'react';
import styled from '@emotion/styled';
import { 
  SiPhilipshue, 
  SiSonos, 
  SiRing,
  SiApple
} from 'react-icons/si';
import { 
  FaPlug, 
  FaVideo, 
  FaLock,
  FaLightbulb,
  FaWifi,
  FaThermometerHalf
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
  background: white;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(3, 169, 244, 0.05);
    transform: translateX(5px);
    border-color: var(--primary-color);
  }
`;

const BrandLogo = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${props => props.color || 'var(--primary-color)'};
  margin-right: 1rem;
`;

const IntegrationInfo = styled.div`
  flex: 1;
`;

const IntegrationName = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: var(--text-primary);
`;

const IntegrationDescription = styled.p`
  margin: 0.25rem 0 0 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const CategoryLabel = styled.span`
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background: #f5f5f5;
  color: var(--text-secondary);
  margin-top: 0.5rem;
  display: inline-block;
`;

const availableIntegrations = [
  {
    id: 1,
    name: 'Philips Hue',
    description: 'Smart lighting system with color and automation support',
    icon: <SiPhilipshue />,
    color: '#00A5CF',
    category: 'Lighting'
  },
  {
    id: 2,
    name: 'Sonos',
    description: 'Wireless speaker and home sound system',
    icon: <SiSonos />,
    color: '#000000',
    category: 'Audio'
  },
  {
    id: 3,
    name: 'Google Nest',
    description: 'Smart temperature control and energy savings',
    icon: <FaThermometerHalf />,
    color: '#00A86B',
    category: 'Climate'
  },
  {
    id: 4,
    name: 'Ring',
    description: 'Video doorbells and security cameras',
    icon: <SiRing />,
    color: '#1E90FF',
    category: 'Security'
  },
  {
    id: 5,
    name: 'TP-Link Kasa',
    description: 'Smart plugs, switches, and lighting',
    icon: <FaPlug />,
    color: '#4CAF50',
    category: 'Power'
  },
  {
    id: 6,
    name: 'Arlo',
    description: 'Wireless security cameras and video doorbells',
    icon: <FaVideo />,
    color: '#2196F3',
    category: 'Security'
  },
  {
    id: 7,
    name: 'Yale',
    description: 'Smart locks and home security',
    icon: <FaLock />,
    color: '#607D8B',
    category: 'Security'
  },
  {
    id: 8,
    name: 'LIFX',
    description: 'Smart LED lights with millions of colors',
    icon: <FaLightbulb />,
    color: '#FF4081',
    category: 'Lighting'
  },
  {
    id: 9,
    name: 'Apple HomeKit',
    description: 'Apples smart home platform',
    icon: <SiApple />,
    color: '#000000',
    category: 'Platform'
  },
  {
    id: 10,
    name: 'UniFi',
    description: 'Professional networking equipment',
    icon: <FaWifi />,
    color: '#0559C9',
    category: 'Network'
  }
];

const IntegrationModal = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIntegrations = availableIntegrations.filter(integration =>
    integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    integration.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleIntegrationClick = (integration) => {
    console.log('Selected integration:', integration);
  };

  return (
    <ModalContent>
      <SearchInput
        type="text"
        placeholder="Search available integrations..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        autoFocus
      />
      
      <IntegrationsList>
        {filteredIntegrations.map(integration => (
          <IntegrationItem
            key={integration.id}
            onClick={() => handleIntegrationClick(integration)}
          >
            <BrandLogo color={integration.color}>
              {integration.icon}
            </BrandLogo>
            <IntegrationInfo>
              <IntegrationName>{integration.name}</IntegrationName>
              <IntegrationDescription>{integration.description}</IntegrationDescription>
              <CategoryLabel>{integration.category}</CategoryLabel>
            </IntegrationInfo>
          </IntegrationItem>
        ))}
      </IntegrationsList>
    </ModalContent>
  );
};

export default IntegrationModal;
