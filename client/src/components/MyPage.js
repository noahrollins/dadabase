import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import Sidebar from "./Sidebar";

function MyPage() {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  };
  return 
}

export default MyPage;
