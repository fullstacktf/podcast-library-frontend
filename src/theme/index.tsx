import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import config from './config';

const Toast = {
  baseStyle: {
    fontWeight: "light",
    textTransform: "uppercase",
  }
};

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  styles: {
    global: (props: any) => ({
      body: {
        fontFamily: "ReadexPro",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "#1C1C1C")(props),
      },
    }),
  },
});

export default theme;
