import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { getToken, getUser, HandleLogout } from "services/authService";
import { Database, CloudArrowUp, SignOut } from "phosphor-react";

const Index = () => {
  const borderColor = useColorModeValue("#E2E8F0", "#3B3B3D");
  const [t, i18n] = useTranslation("global");
  const user = getUser();

  return (
    <>
      {getToken() ? (
        <Menu>
          <MenuButton
            as={Button}
            variant="ghost"
            fontWeight="light"
            border= "1px"
            borderColor= {borderColor}
          >
            {user.username}
          </MenuButton>
          <MenuList>
            <Link to="/app">
              <MenuItem icon={<Database size="20" />}>
              {t("buttons.Dashboard")}
              </MenuItem>
            </Link>
            <Link to="/app/upload">
              <MenuItem icon={<CloudArrowUp size="20" />}>
                {t("buttons.AddPodcast")}
              </MenuItem>
            </Link>
            <MenuDivider />
            <MenuItem icon={<SignOut size="20" />} onClick={HandleLogout}>
              {t("buttons.Logout")}
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Link to="/auth">
          <Button
            variant="ghost"
            fontWeight="light"
            border="1px"
            borderColor={borderColor}
          >
            {t("buttons.LogIn")}
          </Button>
        </Link>
      )}
    </>
  );
};

export default Index;
