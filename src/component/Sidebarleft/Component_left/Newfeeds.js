import React from 'react';
import styled from 'styled-components';
import { FaNewspaper, FaMedal, FaGlobe, FaUsers, FaUserCircle } from 'react-icons/fa';

const SidebarContainer = styled.div`

  margin-top: 10px;
 margin-bottom:10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 250px;
  background-color: #fff; /* White background */
  border-right: 1px solid #e2e6ea; /* Light border on the right */
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15), 0px 2px 4px 0px rgba(0, 0, 0, 0.12); 
  border-radius: 10px;
 
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
  &:hover {
    background-color: #e2e6ea;
  }

  

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
  font-size: 16px;
  color: #6c757d; /* Gray color for the text */
`;

const Newfeeds = () => {
  return (
    <SidebarContainer>
      <SidebarTitle>News Feeds</SidebarTitle>
      <SidebarItem>
        <IconWrapper className="newsfeed">
          <FaNewspaper />
        </IconWrapper>
        <Label>Newsfeed</Label>
      </SidebarItem>
      <SidebarItem>
        <IconWrapper className="badges">
          <FaMedal />
        </IconWrapper>
        <Label>Badges</Label>
      </SidebarItem>
      <SidebarItem>
        <IconWrapper className="explore-stories">
          <FaGlobe />
        </IconWrapper>
        <Label>Explore Stories</Label>
      </SidebarItem>
      <SidebarItem>
        <IconWrapper className="popular-groups">
          <FaUsers />
        </IconWrapper>
        <Label>Popular Groups</Label>
      </SidebarItem>
      <SidebarItem>
        <IconWrapper className="author-profile">
          <FaUserCircle />
        </IconWrapper>
        <Label>Author Profile</Label>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Newfeeds;