import {
  Avatar,
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
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { UserContext } from "./contexts/UserContext";
import DadDetails from "./DadDetails";
import FavoritesCard from "./FavoritesCard";
import MyMoments from "./MyMoments";

function MyPage() {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    fetch(`/people/${user.id}`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  

  return (
    <Flex
      alignItems={"flex-start"}
      left="5"
      h="95vh"
      w="100%"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
      borderRadius={"30px"}
    >
      <DadDetails />
      <MyMoments />
    </Flex>
  );
}

export default MyPage;
