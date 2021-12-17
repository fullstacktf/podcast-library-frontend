import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import config from './config';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: (props: any) => ({
      body: {
        fontFamily: "GTWalsheim-Medium",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "#161618")(props),
      },
    }),
  },
});

export default theme;
