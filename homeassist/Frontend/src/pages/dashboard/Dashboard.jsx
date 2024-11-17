import React from 'react';
import styled from '@emotion/styled';
import MetricCard from '../../components/Dashboard/MetricCard';
import { WiDaySunny } from 'react-icons/wi';
import { MdDevices, MdAutoMode } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const Dashboard = () => {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <DashboardContainer>
      <MetricsGrid>
        <MetricCard 
          title="Weather" 
          value="22°C Sunny" 
          icon={<WiDaySunny size={24} />} 
        />
        <MetricCard 
          title="Time" 
          value={time} 
          icon={<BiTime size={24} />} 
        />
        <MetricCard 
          title="Active Devices" 
          value="12" 
          icon={<MdDevices size={24} />} 
        />
        <MetricCard 
          title="Active Automations" 
          value="5" 
          icon={<MdAutoMode size={24} />} 
        />
      </MetricsGrid>
    </DashboardContainer>
  );
};

export default Dashboard;