import React, { FC, useState } from "react";
import axios from "axios";
import {
  Box,
  Text,
  HStack,
  Button,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { Broadcast, Trash } from "phosphor-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowSquareOut } from "phosphor-react";
import { API_URL } from "services/settings";
import toast from "react-hot-toast";

interface CardProps {
  id: string;
  link: string;
  image: string;
  title: string;
  description: string;
  provider: string;
  author: string;
}

const WithSettings: FC<CardProps> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [t, i18n] = useTranslation("global");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const bg = useColorModeValue("white", "#161618");
  let id = "";

  const handleDelete = () => {
    setError(null);
    setLoading(true);
    axios
      .delete(`${API_URL}/podcasts/${props.id}`)
      .then((response) => {
        setLoading(false);
        toast("Deleted", {
          icon: "✅",
          style: {
            background: "#333",
            color: "#fff",
          },
        });
        window.location.reload();
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401 || error.response.status === 400) {
          setError(error.response.data.message);
        } else {
          console.log("Error.");
        }
      });
  };

  return (
    <>
      <Box
        id={props.id}
        maxW="100%"
        mb="2"
        borderWidth="1px"
        overflow="hidden"
        _hover={{ borderColor: "#e2a851" }}
      >
        <Box p="6">
          <Box mb="2">
            <Broadcast size="25" />
          </Box>
          <Text
            fontSize="2xl"
            lineHeight="tight"
            mb="4"
            isTruncated
            title={props.title}
          >
            {props.title}
          </Text>
          <Box>
            <HStack>
              <Link to={props.link}>
                <Button
                  fontWeight="light"
                  borderRadius="0"
                  border="1px"
                  rightIcon={<ArrowSquareOut />}
                >
                  {t("buttons.ViewPodcast")}
                </Button>
              </Link>
              <IconButton
                title={t("buttons.Delete")}
                aria-label={t("buttons.Delete")}
                onClick={handleDelete}
                borderRadius="0"
                bg="transparent"
                icon={<Trash size="20" />}
              />
            </HStack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WithSettings;
