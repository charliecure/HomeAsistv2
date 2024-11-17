import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaWifi, FaCamera, FaShieldAlt, FaLock, FaVideo, FaHistory, FaExclamationTriangle } from 'react-icons/fa';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: var(--text-primary);
  margin: 0 0 1rem 0;
`;

const SecurityStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.isSecure ? '#4caf50' : '#f44336'};
  font-weight: 500;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: var(--card-background);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
`;

const CardTitle = styled.h2`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-primary);
  font-size: 1.2rem;
`;

const CameraGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const CameraFeed = styled.div`
  background: #2c3e50;
  border-radius: 8px;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
`;

const CameraName = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  background: rgba(0,0,0,0.5);
  color: white;
  font-size: 0.9rem;
`;

const StatusIndicator = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#4caf50' : '#f44336'};
  margin-right: 0.5rem;
`;

const Button = styled.button`
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0288d1;
  }
`;

const SecurityLog = styled.div`
  max-height: 200px;
  overflow-y: auto;
`;

const LogEntry = styled.div`
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

const Security = () => {
  const [isSystemArmed, setIsSystemArmed] = useState(true);

  const securityLogs = [
    { time: '10:23 AM', event: 'Front Door Opened', type: 'info' },
    { time: '09:45 AM', event: 'Motion Detected - Backyard', type: 'warning' },
    { time: '08:30 AM', event: 'System Armed', type: 'success' },
    { time: '08:00 AM', event: 'Front Door Locked', type: 'info' },
  ];

  return (
    <Container>
      <Header>
        <Title>Security Center</Title>
        <SecurityStatus isSecure={isSystemArmed}>
          <FaShieldAlt />
          {isSystemArmed ? 'System Armed' : 'System Disarmed'}
        </SecurityStatus>
      </Header>

      <Grid>
        <Card>
          <CardHeader>
            <CardTitle><FaWifi /> Network Security</CardTitle>
            <Button>Configure</Button>
          </CardHeader>
          <div>
            <p>Router Status: <StatusIndicator active={true} />Online</p>
            <p>Firewall: Active</p>
            <p>Connected Devices: 12</p>
            <p>Last Security Scan: 2 hours ago</p>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle><FaCamera /> Security Cameras</CardTitle>
            <Button>Manage</Button>
          </CardHeader>
          <CameraGrid>
            <CameraFeed>
              <FaVideo />
              <CameraName>Front Door</CameraName>
            </CameraFeed>
            <CameraFeed>
              <FaVideo />
              <CameraName>Backyard</CameraName>
            </CameraFeed>
          </CameraGrid>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle><FaLock /> Home Security</CardTitle>
            <Button onClick={() => setIsSystemArmed(!isSystemArmed)}>
              {isSystemArmed ? 'Disarm' : 'Arm'}
            </Button>
          </CardHeader>
          <div>
            <p><StatusIndicator active={true} />Front Door: Locked</p>
            <p><StatusIndicator active={true} />Back Door: Locked</p>
            <p><StatusIndicator active={true} />Windows: Secured</p>
            <p><StatusIndicator active={true} />Motion Sensors: Active</p>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle><FaHistory /> Security Log</CardTitle>
            <Button>View All</Button>
          </CardHeader>
          <SecurityLog>
            {securityLogs.map((log, index) => (
              <LogEntry key={index}>
                <FaExclamationTriangle 
                  color={log.type === 'warning' ? '#ff9800' : 
                         log.type === 'success' ? '#4caf50' : '#2196f3'} 
                />
                <span>{log.time}</span> - 
                <span>{log.event}</span>
              </LogEntry>
            ))}
          </SecurityLog>
        </Card>
      </Grid>
    </Container>
  );
};

export default Security;
