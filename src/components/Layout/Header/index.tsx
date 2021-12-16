import React from "react";
import { Link } from "react-router-dom";
import {
  chakra,
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
import { List, MagnifyingGlass } from "phosphor-react";
import HeaderLinks from "./links";
import { useTranslation } from "react-i18next";
import Dark from "components/Layout/Dark";
import Search from "components/Layout/Search";
import Github from "components/Layout/Github";
import Lang from "components/Layout/Lang";
import Podbuster from "icons/podbuster";

const Index = () => {
  const mobileNav = useDisclosure();
  const bg = useColorModeValue("white", "#161618");
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Box
        bg={bg}
        borderBottomWidth="1px"
        pos="sticky"
        top="0"
        zIndex="1000"
        w="full"
        px={{ base: 2, sm: 4 }}
        py={3}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
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
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                {HeaderLinks.map((link) => (
                  <>
                    <Link to={link.href} key={link.href}>
                      <Button
                        variant="ghost"
                        size="md"
                        fontWeight="light"
                        leftIcon={link.icon}
                      >
                        `${t(`header.${link.title}`)}`
                      </Button>
                    </Link>
                  </>
                ))}
              </VStack>
            </Box>
            <Link to="/">
              <Box title="Podbuster" display="flex" alignItems="center">
                <Icon as={Podbuster} boxSize={8} size="lg" mr="2" />
                <Text fontSize="18px" mr="2">
                  podbuster
                </Text>
              </Box>
            </Link>
            <HStack spacing={0} display={{ base: "none", md: "inline-flex" }}>
              {HeaderLinks.map((link) => (
                <>
                  <Link to={link.href} key={link.href}>
                    <Button
                      variant="ghost"
                      size="md"
                      fontWeight="light"
                      leftIcon={link.icon}
                    >
                      {t("header." + link.title)}
                    </Button>
                  </Link>
                </>
              ))}
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            mr="1"
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
            <Search />
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
