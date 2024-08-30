import React from 'react';
import styled from 'styled-components';
import { FaNewspaper, FaMedal, FaGlobe, FaUsers, FaUserCircle } from 'react-icons/fa';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 250px;
 
`;

const SidebarTitle = styled.h3`
  font-size: 18px;
  color: #6c757d; /* Gray color for the title */
  margin-bottom: 20px;
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  border-radius: 12px; /* Border radius for rounded corners */
  &:hover {
    background-color: #e2e6ea;
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;  /* Makes the icon background circular */
  color: white;
  margin-right: 20px; /* Space between icon and text */

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
