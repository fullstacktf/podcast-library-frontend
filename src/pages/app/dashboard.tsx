import React from "react";
import { useNavigate } from "react-router-dom";
import { Text, useColorModeValue } from "@chakra-ui/react";
import { getUser, removeUserSession } from "services/authService";
import Sidebar from "components/App/Sidebar";
import ShowPodcasts from "components/Podcasts/showPodcasts";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const borderColor = useColorModeValue("#E2E8F0", "#3B3B3D");
  const [t, i18n] = useTranslation("global");
  const user = getUser();

  return (
    <>
      <Sidebar>
        <Text fontSize="4xl" ml="5" mb="2" mt="0">
          {t("dashboardPage.title")}
        </Text>
        <ShowPodcasts />
      </Sidebar>
    </>
  );
};

export default Dashboard;
