import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { LinkItemProps } from "./LinkItemProps";
import NavItem from "./NavItem";

interface SidebarProps extends BoxProps {
  linkItems: Array<LinkItemProps>;
  onClose: () => void;
}

const SidebarContent = ({ linkItems, onClose, ...rest }: SidebarProps) => {
  const router = useRouter();
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("gray.50", "gray.800")}
      borderRightWidth="1px"
      borderRightColor={useColorModeValue("gray.100", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          LMS
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {linkItems.map((link) => {
        const isActive = router.pathname === link.route;
        return (
          <NavItem
            key={link.name}
            icon={link.icon}
            route={link.route}
            isActive={isActive}
          >
            <Text
              color={isActive ? "brand.500" : ""}
              fontWeight={isActive ? "semibold" : "normal"}
            >
              {link.name}
            </Text>
          </NavItem>
        );
      })}
    </Box>
  );
};

export default SidebarContent;
