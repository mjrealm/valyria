import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { components } from "./components";
import { foundations } from "./foundations";
import globalStyles from "./styles";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const overrides = {
  ...globalStyles,
  config,
  components,
  ...foundations,
};

console.log(overrides);

export default extendTheme(overrides);
