import React, { useState, useContext } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  Heading,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Divider,
} from "@chakra-ui/react";
import { FiHome, FiMenu } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { MdAssignmentInd, MdOutlineAssignmentInd, MdChildFriendly, MdPets, MdOutlineLogout} from "react-icons/md";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { UserContext } from "./contexts/UserContext";
import NavItem from "./NavItem";
import { Link as RouterLink, useNavigate } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    console.log(user)
  const [navSize, setNavSize] = useState("large");

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        console.log(user);
      }
    });
  }

  console.log(user)
  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          bg="none"
          mt={5}
          _hover={{ bg: "blue.700" , color: "white"}}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == "small") setNavSize("large");
            else setNavSize("small");
          }}
        />
        <NavItem navSize={navSize} icon={MdAssignmentInd} title={"My DaDabase"} path={"/mypage"} />
        <NavItem navSize={navSize} icon={MdChildFriendly} title={"Kids"} path={"/kids"}/>
        <NavItem navSize={navSize} icon={MdPets} title={"Pets"} path={"/pets"} />
        <NavItem navSize={navSize} icon={MdOutlineLogout} title={"Logout"} path={"/"} onClick={(e)=>{handleLogoutClick()}}/>
      </Flex>
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex pt={2} align="flex-start">
          <Avatar size="sm" src="" />
          <Flex
            flexDir="column"
            ml={4}
            mt={1}
            display={navSize == "small" ? "none" : "flex-"}
          >
            <Heading fontSize="xl">{user.name}</Heading>
            <Text fontSize="xs">{user.email}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Sidebar;
