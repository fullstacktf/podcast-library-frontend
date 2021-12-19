import React, { FC } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { List, ListNumbers, CloudArrowUp, SignOut } from "phosphor-react";
import { getUser, removeUserSession } from "services/authService";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Sidebar: FC = (props) => {
  const sidebar = useDisclosure();
  const color = useColorModeValue("black", "white");
  const borderColor = useColorModeValue("#E2E8F0", "#3B3B3D");
  const [t, i18n] = useTranslation("global");
  const user = getUser();

  const handleLogout = () => {
    window.location.reload();
    removeUserSession();
  };

  const SidebarContent = () => (
    <Box
      as="nav"
      pos="fixed"
      top={{ base: "0", md: "65px" }}
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      borderRightWidth="1px"
      w={{ base: "full", md: "60" }}
      {...props}
    >
      <Box px="4" py="4" align="center">
        <Text fontSize="3xl" mb="1" fontWeight="light" color="gray.500">
          {user.username}
        </Text>
        <Text fontSize="1xl" fontWeight="light" color="gray.400">
          {user.email}
        </Text>
      </Box>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
        pl="4"
        pr="4"
      >
        <Link to="/app/dashboard">
          <Button
            bg="transparent"
            w="100%"
            color={color}
            border="1px"
            mb="2"
            borderColor={borderColor}
            fontWeight="light"
            leftIcon={<ListNumbers size="20" />}
          >
            {t("buttons.MyPodcasts")}
          </Button>
        </Link>
        <Link to="/app/upload">
          <Button
            w="100%"
            bg="transparent"
            color={color}
            border="1px"
            mb="2"
            borderColor={borderColor}
            fontWeight="light"
            leftIcon={<CloudArrowUp size="20" />}
          >
            {t("buttons.AddPodcast")}
          </Button>
        </Link>
        <Button
          bg="transparent"
          color={color}
          border="1px"
          borderColor={borderColor}
          fontWeight="light"
          onClick={handleLogout}
          leftIcon={<SignOut size="20" />}
        >
          {t("buttons.Logout")}
        </Button>
      </Flex>
    </Box>
  );
  return (
    <Box as="section" minH="100vh">
      <Box display={{ base: "none", md: "unset" }}>
        <SidebarContent />
      </Box>
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          display={{ base: "inline-flex", md: "none" }}
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          borderBottomWidth="1px"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            onClick={sidebar.onOpen}
            icon={<List />}
            size="sm"
          />
        </Flex>
        <Box as="main" p="6">
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
