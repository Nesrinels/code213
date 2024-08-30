import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaHotel, FaMapMarkerAlt, FaPlayCircle } from 'react-icons/fa';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 250px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15), 0px 2px 4px 0px rgba(0, 0, 0, 0.12); 
  border-radius: 10px;
  margin-bottom: 12px;
 
`;
const SidebarTitle = styled.h3`
  font-size: 16px;
  color: #adb5bd; /* Light gray for the title */
  margin-bottom: 20px;
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    
  }
`;

const IconWrapper = styled.div`
  font-size: 20px;
  color: #007bff; /* Blue color for the icons */
  margin-right: 15px; /* Space between icon and text */
`;

const Label = styled.span`
  font-size: 16px;
  color: #6c757d; /* Gray color for the text */
  flex: 1; /* Makes the label take up the remaining space */
`;

const Notification = styled.div`
  background-color: #fd7e14; /* Orange background for the notification */
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 8px;
  margin-left: auto;
`;

const Morepage = () => {
  return (
    <SidebarContainer>
      <SidebarTitle>More Pages</SidebarTitle>
      <SidebarItem>
        <IconWrapper>
          <FaEnvelope />
        </IconWrapper>
        <Label>Email Box</Label>
        <Notification>584</Notification>
      </SidebarItem>
      <SidebarItem>
        <IconWrapper>
          <FaHotel />
        </IconWrapper>
        <Label>Near Hotel</Label>
      </SidebarItem>
      <SidebarItem>
        <IconWrapper>
          <FaMapMarkerAlt />
        </IconWrapper>
        <Label>Latest Event</Label>
      </SidebarItem>
      <SidebarItem>
        <IconWrapper>
          <FaPlayCircle />
        </IconWrapper>
        <Label>Live Stream</Label>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Morepage;
