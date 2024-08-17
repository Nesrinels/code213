// src/components/Icon.js
import React from 'react';
import { IoMail, IoBed, IoCalendar, IoVideocam, IoAnalytics } from 'react-icons/io5';
import { IoChatbubbleOutline, IoBarChartOutline } from 'react-icons/io5'; // Ensure these are the correct imports

// Map icon names to their corresponding React Icons component
const iconMap = {
  envelope: IoMail,
  hotel: IoBed,
  'calendar-event': IoCalendar,
  video: IoVideocam,
  cog: IoAnalytics,
  chat: IoChatbubbleOutline, // Correct icon
  'bar-chart': IoBarChartOutline, 
};

function Icon({ name, color }) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null; // Return null if the icon is not found

  return <IconComponent style={{ color: color, fontSize: '24px' }} />;
}

export default Icon;
