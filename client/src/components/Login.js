import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import dadabasephoto from "../dadabase2.jpg";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
          navigate("/mypage");
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      backgroundImage={dadabasephoto}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box rounded={"lg"} bg={"whiteAlpha.600"} boxShadow={"lg"} p={8}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} >
              Welcome back, Dad!
            </Heading>

          </Stack>
          <Stack spacing={4}>
            <FormControl
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
              <FormLabel>Email address</FormLabel>
              <Input bg="white" type="email" />
            </FormControl>
            <FormControl
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            >
              <FormLabel>Password</FormLabel>
              <Input bg="white" type="password" />
            </FormControl>
            <Stack spacing={10} >

              <Button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                bg={"blue.700"}
                color={"white"}
                _hover={{
                  bg: "blue.900",
                }}
              >
                Sign in
              </Button>
              <Heading fontSize={"xl"}  pb={2} align={"center"}>
              New to DaDabase?{" "}
              <Link color={"blue.700"} as={RouterLink} to="/signup" on>
                Signup!
              </Link>{" "}
              ✌️
            </Heading>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Login;
