import React from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
  background: var(--card-background);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h3`
  margin: 0;
  color: var(--text-secondary);
  font-size: 1rem;
`;

const Value = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const IconWrapper = styled.div`
  color: var(--primary-color);
`;

const MetricCard = ({ title, value, icon }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Value>
        <IconWrapper>{icon}</IconWrapper>
        {value}
      </Value>
    </Card>
  );
};

export default MetricCard;