import React from "react";
import { Link } from "react-router-dom";
import {
  chakra,
  Text,
  Box,
  Flex,
  VisuallyHidden,
  HStack,
  Button,
  VStack,
  Icon,
  IconButton,
  CloseButton,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Horse } from "phosphor-react";
import HeaderLinks from "./links";
import Dark from "components/Layout/Dark";
import { Click } from "components/Animate/click";
import Podbuster from "icons/podbuster";
const Index = () => {
  const mobileNav = useDisclosure();
  const bg = useColorModeValue("white", "#1C1C1C");
  const border = useColorModeValue("gray.100", "#616161");
  return (
    <>
      <chakra.header
        w="full"
        px={{ base: 2, sm: 4 }}
        py={3}
        bg={bg}
        shadow="sm"
        pos="sticky"
        top="0"
        zIndex="1000"
        borderBottom="1px"
        borderColor={border}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <Click>
              <Link to="/">
                <chakra.h1 title="podbuster" display="flex" alignItems="center">
                  <Icon as={Podbuster} boxSize={7} size="lg" mr="2" />
                  <Text fontSize="18px">podbuster</Text>
                  <VisuallyHidden>Podbuster</VisuallyHidden>
                </chakra.h1>
              </Link>
            </Click>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              display={{ base: "none", md: "inline-flex" }}
            >
              {HeaderLinks.map((link) => (
                <>
                  <Link to={link.href} key={link.href}>
                    <Button variant="ghost" fontWeight="light">
                      {link.title}
                    </Button>
                  </Link>
                </>
              ))}
              <Dark />
            </HStack>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                variant="ghost"
                icon={<Horse />}
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
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                {HeaderLinks.map((link) => (
                  <>
                    <Link to={link.href} key={link.href}>
                      <Button variant="ghost" fontWeight="light" width="100%">
                        {link.title}
                      </Button>
                    </Link>
                  </>
                ))}
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </>
  );
};

export default Index;
