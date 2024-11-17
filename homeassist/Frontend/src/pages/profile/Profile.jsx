import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaUser, FaEdit, FaCog, FaBell, FaKey, FaSignOutAlt } from 'react-icons/fa';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background: var(--card-background);
  border-radius: 12px;
  box-shadow: var(--shadow);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfilePicContainer = styled.div`
  position: relative;
`;

const ProfilePic = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: ${props => props.image ? `url(${props.image})` : '#e0e0e0'};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9e9e9e;
  font-size: 4rem;
`;

const EditButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  background: var(--primary-color);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0288d1;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  margin: 0 0 0.5rem 0;
  color: var(--text-primary);
`;

const Email = styled.p`
  margin: 0;
  color: var(--text-secondary);
`;

const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SettingsCard = styled.div`
  background: var(--card-background);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const Profile = () => {
  const [user] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePic: null // Add image URL here
  });

  const settingsCards = [
    {
      icon: <FaCog />,
      title: 'General Settings',
      description: 'Configure general application settings and preferences'
    },
    {
      icon: <FaBell />,
      title: 'Notifications',
      description: 'Manage your notification preferences and alerts'
    },
    {
      icon: <FaKey />,
      title: 'Security',
      description: 'Update password and security settings'
    },
    {
      icon: <FaSignOutAlt />,
      title: 'Sign Out',
      description: 'Sign out of your account'
    }
  ];

  return (
    <Container>
      <ProfileHeader>
        <ProfilePicContainer>
          <ProfilePic image={user.profilePic}>
            {!user.profilePic && <FaUser />}
          </ProfilePic>
          <EditButton>
            <FaEdit />
          </EditButton>
        </ProfilePicContainer>
        <ProfileInfo>
          <Name>{user.name}</Name>
          <Email>{user.email}</Email>
        </ProfileInfo>
      </ProfileHeader>

      <SettingsGrid>
        {settingsCards.map((card, index) => (
          <SettingsCard key={index}>
            <CardHeader>
              {card.icon}
              <h3>{card.title}</h3>
            </CardHeader>
            <p>{card.description}</p>
          </SettingsCard>
        ))}
      </SettingsGrid>
    </Container>
  );
};

export default Profile;
