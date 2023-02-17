import moment from "moment";
import { UserContext } from "./contexts/UserContext";
import React, { useContext, useState } from "react";
import {
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

function AddKidForm() {
  const [firstName, setFirstName] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nickname, setNickname] = useState("");
  const [birthday, setBirthday] = useState("");
  const formattedBirthday = moment(birthday, "YYYY-MM-DD").format();
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const { user, setUser } = useContext(UserContext);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();

  const newKid = {
    name: firstName,
    nickname: nickname,
    date_of_birth: formattedBirthday,
    zipcode: user.zipcode,
    password: password,
    password_confirmation: passwordConfirmation,
    dad_id: user.id
  };
  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/people/:id/kids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ person: newKid }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        toast({
          title: "Kid created!",
          description: "Your kid has been created! (...again?)",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Box>
      <FormControl id="name" isRequired>
        <FormLabel>First Name</FormLabel>
        <Input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </FormControl>
      <FormControl id="name">
        <FormLabel>Nickname</FormLabel>
        <Input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </FormControl>
      <FormControl id="name">
        <FormLabel>Birthday</FormLabel>
        <Input
          type="date"
          placeholder="YYYY-MM-DD"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </FormControl>
      <FormControl value={password}>
        <FormLabel htmlFor="password" mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            bg="white"
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl value={passwordConfirmation}>
        <FormLabel htmlFor="password" mt="2%">
          Password Confirmation
        </FormLabel>
        <InputGroup size="md">
          <Input
            bg="white"
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Confirm password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button type="submit" onClick={handleSubmit} m={2}>
        Add Kid
      </Button>
    </Box>
  );
}

export default AddKidForm;
