import {
  Box,
  Drawer,
  DrawerContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FiFileText, FiSettings, FiStar, FiUsers, FiZap } from "react-icons/fi";
import MobileNav from "./MobileNav";
import SidebarContent from "./SidebarContent";
import { LinkItemProps } from "./LinkItemProps";

/** Navigation items */
const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: FiZap, route: "/" },
  { name: "Customers", icon: FiUsers, route: "/customers" },
  { name: "Invoices", icon: FiFileText, route: "#" },
  { name: "Custom Fields", icon: FiStar, route: "#" },
  { name: "Settings", icon: FiSettings, route: "#" },
];

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("white", "gray.900")}>
      <SidebarContent
        linkItems={LinkItems}
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent linkItems={LinkItems} onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}
