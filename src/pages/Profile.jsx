import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import { Context } from "../main";

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);

  // console.log(user);
  if (!isAuthenticated) return <Navigate to={"/login"} />;

  return loading ? (
    <Loader />
  ) : (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
  );
};

export default Profile;
