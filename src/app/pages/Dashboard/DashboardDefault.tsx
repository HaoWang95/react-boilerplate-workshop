import React from 'react';

interface UserInfo {
  username?: string;
}

const DashboardDefault = ({ username }: UserInfo) => {
  return <h1>Welcome {username ? username : 'user'}</h1>;
};

export default DashboardDefault;
