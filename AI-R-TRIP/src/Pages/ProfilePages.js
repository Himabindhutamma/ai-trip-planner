import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ProfilePages = () => {
  const profiles = ["profile1", "profile2"];
  return (
    <div>
      {profiles.map((profile, key) => (
        <NavLink
          key={profile}
          to={`/profilepages/${profile}`}
          className={({ isActive }) => {
            return isActive ? "text-background" : "";
          }}
        >
          {profile}
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
};
export default ProfilePages;
