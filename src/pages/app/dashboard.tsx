import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, useColorModeValue } from "@chakra-ui/react";
import { getUser, removeUserSession } from "services/authService";

const Dashboard = () => {
  const borderColor = useColorModeValue("#E2E8F0", "#3B3B3D");
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    window.location.reload();
    removeUserSession();
  };

  return (
    <>
      <h1>Welcome {user.username}</h1>
      <Button
        border="1px"
        borderColor={borderColor}
        fontWeight="light"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </>
  );
};

export default Dashboard;
