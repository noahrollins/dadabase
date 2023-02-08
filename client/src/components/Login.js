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
import dadabasephoto from "../dadabase.jpg";

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
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} color={"white"}>Welcome back, Dad!</Heading>
          <Text fontSize={"lg"} color={"white"}>
            new to DaDabase?{" "}
            <Link color={"cyan.200"} as={RouterLink} to="/signup" on>
              Signup!
            </Link>{" "}
            ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            >
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Login;
