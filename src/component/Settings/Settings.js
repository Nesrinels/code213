import React from 'react';
import styled from 'styled-components';
import { FaNewspaper, FaMedal, FaGlobe, FaUsers, FaUserCircle } from 'react-icons/fa';

const SidebarContainer = styled.div`

  margin-top: 10px;
  margin-left: 150px;
  margin-right: 150px;
 margin-bottom:10px;
  display: flex;
  flex-direction: column;
  padding: 50px;
  width: 1000px;
  background-color: #fff; /* White background */
  border-right: 1px solid #e2e6ea; /* Light border on the right */
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15), 0px 2px 4px 0px rgba(0, 0, 0, 0.12); 
  border-radius: 10px;
`;
const SettingsTitle = styled.h3`
  font-size: 50px;
  color: #000000; /* blak color for the title */
  margin-bottom: 20px;
`;
const SidebarTitle = styled.h3`
  font-size: 18px;
  color: #6c757d; /* Gray color for the title */
  margin-bottom: 20px;
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 3px 0;
  cursor: pointer;
  border-radius:8px; /* Border radius for rounded corners */
 

  

`;

const IconWrapper = styled.div`

  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;  /* Makes the icon background circular */
  color: white;
  margin-right: 15px; /* Space between icon and text */

  /* Custom colors for each icon based on the image you provided */
  &.newsfeed {
    background-color: #007bff; /* Blue */
  }
  &.badges {
    background-color: #fd7e14; /* Orange */
  }
  &.explore-stories {
    background-color: #ffc107; /* Yellow */
  }
  &.popular-groups {
    background-color: #dc3545; /* Red */
  }
  &.author-profile {
    background-color: #007bff; /* Blue */
  }
`;

const Label = styled.span`
  font-size: 20px;
  color: ##000000; /* black color for the text */
`;

const Settings = () => {
  return (
    <SidebarContainer>
      <SettingsTitle>Settings</SettingsTitle>

      <SidebarTitle>Genaral</SidebarTitle>

      <SidebarItem>
        <IconWrapper className="newsfeed">
          <FaNewspaper />
        </IconWrapper>
        <Label>Account information</Label>
      </SidebarItem>



      <SidebarItem>
        <IconWrapper className="badges">
          <FaMedal />
        </IconWrapper>
        <Label>Saved Address</Label>
      </SidebarItem>



      <SidebarItem>
        <IconWrapper className="explore-stories">
          <FaGlobe />
        </IconWrapper>
        <Label>Social Acount</Label>
      </SidebarItem>

      <SidebarTitle>Account</SidebarTitle>



      <SidebarItem>
        <IconWrapper className="popular-groups">
          <FaUsers />
        </IconWrapper>
        <Label>My Cards</Label>
      </SidebarItem>



      <SidebarItem>
        <IconWrapper className="author-profile">
          <FaUserCircle />
        </IconWrapper>
        <Label>Password</Label>
      </SidebarItem>


      <SidebarTitle>Other</SidebarTitle>



      <SidebarItem>
        <IconWrapper className="author-profile">
          <FaUserCircle />
        </IconWrapper>
        <Label>Notification</Label>
      </SidebarItem>


      <SidebarItem>
        <IconWrapper className="author-profile">
          <FaUserCircle />
        </IconWrapper>
        <Label>Help</Label>
      </SidebarItem>


      <SidebarItem>

        <IconWrapper className="author-profile">
          <FaUserCircle />
        </IconWrapper>
        
        <Label>Lagout</Label>
      </SidebarItem>



      
    </SidebarContainer>
  );
};

export default Settings;

