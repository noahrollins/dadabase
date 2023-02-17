import React, { useContext, useEffect, useState } from "react";
import { CheckIcon, CloseIcon, EmailIcon } from "@chakra-ui/icons";
import moment from "moment";
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
  const [nickname, setNickname] = useState(user.nickname);
  const [spouseName, setSpouseName] = useState(user.spouse);
  const [birthday, setBirthday] = useState(user.birthday);
  const [zipCode, setZipCode] = useState(user.zip_code);
  const formattedBirthday = moment(birthday, "YYYY-MM-DD").format();

  const handleSubmit = () => {
    fetch(`/people/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        email: email,
        nickname: nickname,
        spouse: spouseName,
        date_of_birth: formattedBirthday,
        zipcode: zipCode,
     }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser({ ...user, email: email, nickname: nickname, spouse: spouseName, date_of_birth: birthday, zip_code: zipCode });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Card borderRadius="30px" >
      <CardHeader>
        <Avatar />
        <Flex ml={4} mt={1}>
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
              onChange={(e) => setEmail(e)}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Nickname
            </Heading>
            <Editable
              submitOnBlur={true}
              defaultValue={user.nickname ? user.nickname : "N/A"}
              onSubmit={handleSubmit}
              onChange={(e) => setNickname(e)}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Spouse Name
            </Heading>
            <Editable
              submitOnBlur={true}
              defaultValue={user.spouse ? user.spouse : "N/A"}
              onSubmit={handleSubmit}
              onChange={(e) => setSpouseName(e)}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Birthday
            </Heading>
            <Editable
              submitOnBlur={true}
              defaultValue={user.date_of_birth ? user.date_of_birth : "YYYY-MM-DD"}
              onSubmit={handleSubmit}
              onChange={(e) => setBirthday(e)}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Zip Code
            </Heading>
            <Editable
              submitOnBlur={true}
              defaultValue={user.zipcode ? user.zipcode : "N/A"}
              onSubmit={handleSubmit}
              onChange={(e) => setZipCode(e)}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default DadDetails;
