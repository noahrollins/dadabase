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
  import FavoritesCard from "./FavoritesCard";
  
  function MyKids() {
    const { user, setUser } = useContext(UserContext);
    console.log(user.favorites);
    useEffect(() => {
      fetch(`/people/${user.id}`, {
        method: "GET",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
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
      </Flex>
    );
  }
  
  export default MyKids;
  