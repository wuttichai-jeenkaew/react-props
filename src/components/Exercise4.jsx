import React from "react";

const UserProfile = () => {
  return (
    <div className="profile">
      <h2>User Profile</h2>
      <DisplayName />
    </div>
  );
};

const DisplayName = () => {
  return <p>Name: </p>;
};

const Exercise4 = () => {
  const username = "John";

  return (
    <div className="container">
      <UserProfile />
    </div>
  );
};

export default Exercise4;
