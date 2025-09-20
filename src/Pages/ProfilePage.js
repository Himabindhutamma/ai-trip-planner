import React from "react";
import { useParams } from "react-router-dom";
import App from "../App";

const ProfilePage = () => {
  const { profileId } = useParams();
  console.log(profileId);
  const renderComponent = () => {
    switch (profileId) {
      case "profile1":
        return <App />;
      case "profile2":
        return <App />;
      default:
        return <div>Profile Page Not Found</div>;
    }
  };
  return <>{renderComponent()}</>;
};
export default ProfilePage;
