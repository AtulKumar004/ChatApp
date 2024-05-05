// UserInfoUpdate.js

import React, { useState } from 'react';

const UserInfoUpdate = () => {
  const [userInfo, setUserInfo] = useState({
    firstname: '',
    lastName: '',
    userProfile: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Info Update</h1>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="firstname" className="mb-1">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={userInfo.firstname}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName" className="mb-1">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userInfo.lastName}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="userProfile" className="mb-1">User Profile</label>
          <input
            type="text"
            id="userProfile"
            name="userProfile"
            value={userInfo.userProfile}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Update</button>
      </form>
    </div>
  );
};

export default UserInfoUpdate;
