import React, { FC, Suspense, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { WEB_URL } from "services/settings";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Badge,
  AspectRatio,
  SimpleGrid,
  Button,
  Stack,
} from "@chakra-ui/react";
import ReactPlayer from "react-player/youtube";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { User, Play, Pause, Copy, ShareNetwork } from "phosphor-react";
import Show from "animations/Show";
import Loader from "animations/Loader";
import { useTranslation } from "react-i18next";

interface PlayerProps {
  image: string;
  title: string;
  genre: string;
  description: string;
  provider: string;
  author: string;
  language: string;
  url: string;
}

const Player: FC<PlayerProps> = (props) => {
  const border = useColorModeValue("gray.300", "#616161");
  const [isPlaying, setPlaying] = useState(false);
  const [copied, setCopied] = useState(false);
  const [t, i18n] = useTranslation("global");
  const location = useLocation();

  const onCopyText = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
        <Suspense fallback={<Loader />}>
          <Box>
            <AspectRatio ratio={21 / 9}>
              <ReactPlayer
                controls={true}
                width="100%"
                height="100%"
                playing={isPlaying}
                url={`${props.url}`}
              />
            </AspectRatio>
          </Box>
        </Suspense>
        <Flex
          direction="column"
          alignItems="start"
          justifyContent="center"
          px={{ base: 4, lg: 16 }}
          py={5}
        >
          <Show delay={0.2}>
            <Stack direction="row" mb="4">
              <Badge fontWeight="light">{props.provider}</Badge>
              <Badge fontWeight="light">{props.genre}</Badge>
              <Badge fontWeight="light">{props.language}</Badge>
            </Stack>
          </Show>
          <Show delay={0}>
            <chakra.h1
              mb={2}
              fontSize={{ base: "3xl", md: "3xl", lg: "6xl" }}
              fontWeight="bold"
              color={useColorModeValue("brand.600", "gray.300")}
              lineHeight="shorter"
            >
              {props.title}
            </chakra.h1>
          </Show>
          <chakra.p pr={{ base: 0, lg: 16 }} mt="4" mb="4" fontSize="sm">
            {props.description}
          </chakra.p>
          <Flex>
            <Button
              bg="transparent"
              border="1px"
              variant="outline"
              title={isPlaying ? `${t("buttons.Pause")}` : `${t("buttons.Play")}`}
              onClick={() => setPlaying(!isPlaying)}
              fontWeight="light"
              marginRight="3"
              leftIcon={isPlaying ? <Pause size="20" /> : <Play size="20" />}
            >
              {isPlaying ? `${t("buttons.Pause")}` : `${t("buttons.Play")}`}
            </Button>
            <Show delay={0.2}>
              <Link to={`/author/${props.author}`}>
                <Button
                  leftIcon={<User />}
                  borderLeft="1px"
                  borderRadius="0"
                  borderColor={border}
                  variant="ghost"
                  fontWeight="light"
                  w="100%"
                >
                  {props.author}
                </Button>
              </Link>
            </Show>
            <CopyToClipboard text={`${WEB_URL}${location.pathname}`} onCopy={onCopyText}>
              <Button
                bg="transparent"
                border="0"
                borderRadius="0"
                variant="outline"
                title={copied ? `${t("buttons.Copied")}` : `${t("buttons.Copy")}`}
                onClick={() => setCopied(!isPlaying)}
                fontWeight="light"
                marginRight="3"
                leftIcon={copied ? <Copy size="20" /> : <ShareNetwork size="20" />}
              >
                {copied ? `${t("buttons.Copied")}` : `${t("buttons.Share")}`}
              </Button>
            </CopyToClipboard>
          </Flex>
        </Flex>
      </SimpleGrid>
    </>
  );
};

export default Player;
