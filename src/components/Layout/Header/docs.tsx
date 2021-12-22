import React from "react";
import { Button, Link, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { ArrowSquareOut } from "phosphor-react";

const Docs = () => {
  const bgHover = useColorModeValue("#E8E8E8", "#252525");
  const borderColor = useColorModeValue("#303030", "#3B3B3D");
  const colorHover = useColorModeValue("#2E2E2E", "white");
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Link href="https://docs.podbuster.live/" isExternal>
        <Button
          _hover={{
            background: bgHover,
            color: colorHover,
            textDecoration: "none",
          }}
          variant="ghost"
          size="md"
          fontWeight="light"
          fontSize="17px"
          rightIcon={<ArrowSquareOut />}
        >
          {t("header.Docs")}
        </Button>
      </Link>
    </>
  );
};

export default Docs;
