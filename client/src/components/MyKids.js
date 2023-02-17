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
  } from "@chakra-ui/react";
  import React, { useContext, useEffect } from "react";
import { MdFilterCenterFocus } from "react-icons/md";
  import { UserContext } from "./contexts/UserContext";
  import AddKidPrompt from "./AddKidPrompt";
  
  function MyKids() {
    const { user, setUser } = useContext(UserContext);
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
    

    if (user.kids.length === 0) {
        return (
            <Center w={"100%"}>
                <AddKidPrompt/>
            </Center>
        )
    } else {}


  }
  
  export default MyKids;
  