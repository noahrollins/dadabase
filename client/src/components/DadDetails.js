import React, { useContext, useEffect, useState } from "react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Flex,
  Avatar,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Box,
  Heading,
  Text,
  StackDivider,
  EditablePreview,
  useColorModeValue,
  IconButton,
  Input,
  useDisclosure,
  useEditableControls,
  ButtonGroup,
  SlideFade,
  Editable,
  Tooltip,
  EditableInput,
} from "@chakra-ui/react";
import { UserContext } from "./contexts/UserContext";

function DadDetails() {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = () => {
    console.log(user);
    fetch(`/people/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser({ ...user, email: email });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Card borderRadius="30px">
      <CardHeader>
        <Avatar />
        <Flex flexDir={"column"} ml={4} mt={1}>
          <Heading fontSize="xl">{user.name}</Heading>
        </Flex>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Email
            </Heading>
            <Editable
              submitOnBlur={true}
              defaultValue={user.email}
              onSubmit={handleSubmit}
              onChange={(e)=> setEmail(e.target.value)}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Birthday
            </Heading>
            <Text pt="2" fontSize="sm">
              {user.date_of_birth ? user.date_of_birth : "N/A"}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Zip Code
            </Heading>
            <Text pt="2" fontSize="sm">
              {user.zip_code ? user.zip_code : "N/A"}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default DadDetails;
