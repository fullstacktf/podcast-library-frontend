import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Text,
  Box,
  Flex,
  HStack,
  Button,
  VStack,
  IconButton,
  CloseButton,
  useColorModeValue,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { List } from "phosphor-react";
import HeaderLinks from "./links";
import { useTranslation } from "react-i18next";
import Auth from "components/Layout/Auth";
import Github from "components/Layout/Github";
import Dark from "components/Layout/Dark";
import Lang from "components/Layout/Lang";
import Docs from "components/Layout/Header/docs";

import Podbuster from "icons/podbuster";

const Index = () => {
  const mobileNav = useDisclosure();
  const [t, i18n] = useTranslation("global");
  const bg = useColorModeValue("#DCBF8E", "#161618");
  const bgHover = useColorModeValue("#E8E8E8", "#252525");
  const borderColor = useColorModeValue("#303030", "#3B3B3D");
  const colorHover = useColorModeValue("#2E2E2E", "white");

  return (
    <>
      <Box
        bg={bg}
        borderBottom="0px"
        borderColor={borderColor}
        pos="sticky"
        top="0"
        zIndex="1000"
        w="full"
        px={{ base: 2, sm: 4 }}
        py={3}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box
              display={{ base: "inline-flex", md: "inline-flex", lg: "none" }}
            >
              <IconButton
                display={{ base: "flex", md: "inline-flex", lg: "none" }}
                aria-label="Open menu"
                variant="ghost"
                icon={<List size="25" />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                bg={bg}
                spacing={1}
                shadow="sm"
                border="1px"
                borderColor={borderColor}
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                {HeaderLinks.map((link) => (
                  <>
                    <Link to={link.href} key={link.href}>
                      <Button variant="ghost" size="md" fontWeight="light">
                        {t("header." + link.title)}
                      </Button>
                    </Link>
                  </>
                ))}
              </VStack>
            </Box>
            <Link to="/">
              <Box title="Podbuster" display="flex" alignItems="center">
                <Icon as={Podbuster} boxSize={8} size="lg" mr="2" />
                <Text
                  fontSize="18px"
                  mr="2"
                  display={{ base: "none", md: "inline-flex" }}
                >
                  Podbuster
                </Text>
              </Box>
            </Link>
            <HStack
              spacing={0}
              display={{ base: "none", md: "none", lg: "inline-flex" }}
            >
              {HeaderLinks.map((link) => (
                <>
                  <Link to={link.href} key={link.href}>
                    <Button
                      _hover={{
                        background: bgHover,
                        color: colorHover,
                      }}
                      variant="ghost"
                      size="md"
                      fontWeight="light"
                      fontSize="17px"
                    >
                      {t("header." + link.title)}
                    </Button>
                  </Link>
                </>
              ))}
              <Docs />
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            mr="1"
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
            <Auth />
            <Dark />
            <Lang />
            <Github />
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Index;
