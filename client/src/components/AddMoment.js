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

function AddMoment() {
  const { user, setUser } = useContext(UserContext);
  const [moments, setMoments] = useState(user.moments);
  const [newMoment, setNewMoment] = useState("");
  const currentDate = new Date();

  const handleSubmit = () => {
    fetch(`/people/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        moments: ([...moments, newMoment])
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser({ ...user, moments: newMoment });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Card borderRadius="30px" w={"100%"}>
      <CardHeader>
        <Heading>What memories are we making today?</Heading>
      </CardHeader>
      <CardBody>
        <Heading size="md">{currentDate.toDateString()}:</Heading>
        <Textarea placeholder="Once upon a time.." value={newMoment} onChange={(e) => setNewMoment(e.target.value)}></Textarea>
        <Button m={2} onClick={handleSubmit}>Save</Button>
      </CardBody>
    </Card>
  );
}

export default AddMoment;
