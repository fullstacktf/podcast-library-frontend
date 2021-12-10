import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { Horse } from "phosphor-react";
import SidebarLinks from "./links";
import { Click } from "components/Animate/click";

const Sidebar: FC = (props) => {
  const sidebar = useDisclosure();
  const color = useColorModeValue("black", "white");
  const NavItem = (props: any) => {
    const { icon, children, ...rest } = props;
    return (
      <Click>
        <Flex
          align="center"
          px="4"
          pl="4"
          py="4"
          color={color}
          cursor="pointer"
          role="group"
          fontSize="16px"
          fontWeight="light"
          transition=".15s ease"
          {...rest}
        >
          {icon && <Icon mx="2" boxSize="5" as={icon} />}
          {children}
        </Flex>
      </Click>
    );
  };

  const SidebarContent = (props: any) => (
    <Box
      as="nav"
      pos="fixed"
      top="65px"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
        pt="2"
      >
        {SidebarLinks.map((link) => (
          <>
            <Link to={link.href} key={link.href}>
              <NavItem icon={link.icon}>{link.title}</NavItem>
            </Link>
          </>
        ))}
      </Flex>
    </Box>
  );

  return (
    <>
      <Box as="section" minH="100vh">
        <SidebarContent display={{ base: "none", md: "unset" }} />
        <Drawer
          isOpen={sidebar.isOpen}
          onClose={sidebar.onClose}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <SidebarContent w="full" borderRight="none" />
          </DrawerContent>
        </Drawer>
        <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
          <Flex
            as="header"
            align="center"
            justify="space-between"
            w="full"
            px="4"
            borderBottomWidth="1px"
            h="14"
            display={{ base: "inline-flex", md: "none" }}
          >
            <IconButton
              aria-label="Menu"
              onClick={sidebar.onOpen}
              icon={<Horse />}
              size="sm"
            />
          </Flex>
          <Box as="main" p="4">
            {props.children}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Sidebar;
