import React from "react";
import { useNavigate } from "react-router-dom";
import { Text, useColorModeValue } from "@chakra-ui/react";
import { getUser, removeUserSession } from "services/authService";
import Sidebar from "components/App/Sidebar";
import ShowUserPodcasts from "components/Podcasts/showPodcastUser";
import { useTranslation } from "react-i18next";
import Show from "animations/Show";

const Dashboard = () => {
  const borderColor = useColorModeValue("#E2E8F0", "#3B3B3D");
  const [t, i18n] = useTranslation("global");
  const user = getUser();

  return (
    <>
      <Sidebar>
        <Show delay={0}>
          <Text fontSize="4xl" mb="2" mt="0">
            {t("dashboardPage.title")}
          </Text>
        </Show>
        <ShowUserPodcasts author={user.username} />
      </Sidebar>
    </>
  );
};

export default Dashboard;
