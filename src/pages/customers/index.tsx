import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  VStack,
  Text,
  HStack,
  Spacer,
  Button,
  Input,
  Select,
  InputGroup,
  InputLeftElement,
  Container,
  ButtonGroup,
  Badge,
  CloseButton,
  Progress,
  LinkBox,
  LinkOverlay,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  InputLeftAddon,
  MenuGroup,
  MenuOptionGroup,
  MenuItemOption,
  Switch,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import {
  FiBriefcase,
  FiEdit,
  FiFilter,
  FiMoreVertical,
  FiPhone,
  FiPlus,
  FiPrinter,
  FiSearch,
  FiTrash,
  FiUserX,
} from "react-icons/fi";

const Customers = () => {
  return (
    <Box>
      <Flex
        minWidth={"max-content"}
        alignItems={"center"}
        paddingBottom={8}
        paddingTop={2}
      >
        <Box p={2}>
          <Heading size={"lg"}>
            Customers
            <Badge ml="2" colorScheme={"brand"}>
              50
            </Badge>
          </Heading>
        </Box>
        <Spacer />
        <HStack>
          <Box>
            <Button leftIcon={<FiPlus />} colorScheme={"brand"}>
              New Customer
            </Button>
          </Box>
        </HStack>
      </Flex>

      <Box borderRadius={"xl"} borderWidth={"1px"} paddingY={4}>
        <HStack paddingX={4} paddingBottom={8}>
          <Box w={"lg"}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<FiSearch />} />
              <Input placeholder="Search" type={"search"} variant={"filled"} />
            </InputGroup>
          </Box>
          <Spacer />
          <ButtonGroup spacing={2} variant={"outline"}>
            <Button leftIcon={<FiPrinter />}>Print</Button>
            <Button leftIcon={<FiFilter />}>Filter</Button>
          </ButtonGroup>
        </HStack>
        <TableContainer>
          <Table variant={"simple"}>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Status</Th>
                <Th>Contact</Th>
                <Th>Loans</Th>
                <Th>Since</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <LinkBox
                as={Tr}
                _hover={{ bg: useColorModeValue("gray.50", "gray.800") }}
              >
                <Td>
                  <LinkOverlay href="/">
                    <HStack>
                      <Avatar name="Michael De Leon" size={"sm"}></Avatar>
                      <Text>Michael De Leon</Text>
                    </HStack>
                  </LinkOverlay>
                </Td>
                <Td>
                  <Badge colorScheme="blue">Active</Badge>
                </Td>
                <Td>09173245232</Td>
                <Td>
                  <Box>
                    <Progress value={80} size={"sm"} colorScheme={"brand"} />
                    <Text fontSize={"xs"}>8/10</Text>
                  </Box>
                </Td>
                <Td>12/20/2022</Td>
                <Td>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="Options"
                      icon={<FiMoreVertical />}
                      variant={"simple"}
                    ></MenuButton>
                    <MenuList>
                      <MenuItem icon={<FiEdit />}>Edit Information</MenuItem>
                      <MenuItem icon={<FiBriefcase />}>View All Loans</MenuItem>
                      <MenuDivider />
                      <MenuItem icon={<FiUserX />} color={"red.500"}>
                        Remove
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </LinkBox>

              <LinkBox
                as={Tr}
                _hover={{ bg: useColorModeValue("gray.50", "gray.800") }}
              >
                <Td>
                  <LinkOverlay href="/">
                    <HStack>
                      <Avatar name="Chastine De Leon" size={"sm"}></Avatar>
                      <Text>Chastine De Leon</Text>
                    </HStack>
                  </LinkOverlay>
                </Td>
                <Td>
                  <Badge colorScheme="green">Complete</Badge>
                </Td>
                <Td>09223545563</Td>
                <Td>
                  <Box>
                    <Progress value={100} size="sm" colorScheme={"brand"} />
                    <Text fontSize={"xs"}>5/5</Text>
                  </Box>
                </Td>
                <Td>12/20/2022</Td>
                <Td>
                  <IconButton
                    aria-label="Deactivate"
                    icon={<FiMoreVertical />}
                    variant={"simple"}
                  />
                </Td>
              </LinkBox>
              <LinkBox
                as={Tr}
                _hover={{ bg: useColorModeValue("gray.50", "gray.800") }}
              >
                <Td>
                  <LinkOverlay href="/">
                    <HStack>
                      <Avatar name="Nino De Leon" size={"sm"}></Avatar>
                      <Text>Nino De Leon</Text>
                    </HStack>
                  </LinkOverlay>
                </Td>
                <Td>
                  <Badge colorScheme="red">Past Due</Badge>
                </Td>
                <Td>09167772234</Td>
                <Td>
                  <Box>
                    <Progress value={50} size="sm" colorScheme={"brand"} />
                    <Text fontSize={"xs"}>10/20</Text>
                  </Box>
                </Td>
                <Td>12/20/2022</Td>
                <Td>
                  <IconButton
                    aria-label="Deactivate"
                    icon={<FiMoreVertical />}
                    variant={"simple"}
                  />
                </Td>
              </LinkBox>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Customers;
