import {
  Flex,
  FlexProps,
  Icon,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
  icon: IconType;
  route: string;
  isActive: boolean;
}

const NavItem = ({
  icon,
  children,
  route,
  isActive,
  ...rest
}: NavItemProps) => {
  return (
    <NextLink href={route} passHref>
      <Link
        href="#"
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: useColorModeValue("gray.100", "gray.900"),
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize={isActive ? "24" : "16"}
              _groupHover={{
                color: "brand.500",
              }}
              as={icon}
              color={isActive ? "brand.500" : ""}
            />
          )}
          {children}
        </Flex>
      </Link>
    </NextLink>
  );
};

export default NavItem;
