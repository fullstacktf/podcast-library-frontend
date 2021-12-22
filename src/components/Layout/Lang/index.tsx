import React from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { Translate } from "phosphor-react";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Menu>
        <MenuButton
          cursor="pointer"
          as={IconButton}
          icon={<Translate size="25" />}
          bg="transparent"
          border="0"
          variant="outline"
        />
        <MenuList>
          <MenuOptionGroup
            defaultValue="es"
            title="Language"
            type="radio"
            fontWeight="light"
          >
            <MenuItemOption value="es" onClick={() => changeLanguage("es")}>
              Español
            </MenuItemOption>
            <MenuItemOption value="en" onClick={() => changeLanguage("en")}>
              English
            </MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </>
  );
};

export default Index;
