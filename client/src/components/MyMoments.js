import {
  Avatar,
  Center,
  Flex,
  Box,
  Card,
  CardHeader,
  CardBody,
  StackDivider,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { MdFilterCenterFocus } from "react-icons/md";
import { UserContext } from "./contexts/UserContext";
import AddKidPrompt from "./AddKidPrompt";
import AddMoment from "./AddMoment";

function MyMoments() {
  const { user, setUser } = useContext(UserContext);
  const [moments, setMoments] = useState(user.moments);
  const currentDate = new Date();

  return (
    <Box w={"100%"}>
      <AddMoment />
    </Box>
  );
}

export default MyMoments;
