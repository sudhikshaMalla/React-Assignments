import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <p>Loading</p>;
  }
  if (!isAuthenticated) {
    return <p>Logged out</p>;
  }
  return (
    <div>
      <h1>User Details Are: </h1>
      <img src={user?.picture} alt={user?.name} />
      <h3>name : {user?.name}</h3>
      <h3>email : {user?.email}</h3>
      <h3>Family Name : {user?.family_name}</h3>
    </div>
  );
}
