import React from 'react';
import styled from 'styled-components';
import { FaCog, FaChartPie, FaComments } from 'react-icons/fa';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 250px;
  background-color: #fff; /* White background */
  border-right: 1px solid #e2e6ea; /* Light border on the right */
     box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15), 0px 2px 4px 0px rgba(0, 0, 0, 0.12); 
  border-radius: 10px;
   margin-bottom: 12px;
`;

const SidebarTitle = styled.div`
  font-size: 12px; /* Smaller font size */
  color: #adb5bd; /* Light gray color */
  margin-bottom: 20px;
  font-weight: normal;
  text-align: left; /* Align text to the left */
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  border-radius: 8px; /* Slightly rounded corners */
  &:hover {
    background-color: #f8f9fa; /* Light gray background on hover */
  }
`;

const IconWrapper = styled.div`
  font-size: 20px;
  color: #6c757d; /* Gray color for the icons */
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
  border-radius: 50%; /* Circular shape */
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px; /* Fixed size for the notification badge */
`;

const Account = () => {
  return (
    <SidebarContainer>
      <SidebarTitle>Account</SidebarTitle> {/* Title adjusted for size and color */}
      <SidebarItem>
        <IconWrapper>
          <FaCog />
        </IconWrapper>
        <Label>Settings</Label>
      </SidebarItem>
      <SidebarItem>
        <IconWrapper>
          <FaChartPie />
        </IconWrapper>
        <Label>Analytics</Label>
      </SidebarItem>
      <SidebarItem>
        <IconWrapper>
          <FaComments />
        </IconWrapper>
        <Label>Chat</Label>
        <Notification>23</Notification>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Account;
