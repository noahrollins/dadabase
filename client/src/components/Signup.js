import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import dadabasephoto from "../dadabase.jpg";
import { useToast } from "@chakra-ui/react";


const Form1 = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={"center"}  mb="2%">
        Dad Basics
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" >
            First name
          </FormLabel>
          <Input bg="white" id="first-name" placeholder="First name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" >
            Last name
          </FormLabel>
          <Input bg="white" id="last-name" placeholder="First name" />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" >
          Email address
        </FormLabel>
        <Input bg="white" id="email" type="email" placeholder="me@example.com" />
        <FormHelperText color="white">We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password"  mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input bg="white"
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password"  mt="2%">
          Password Confirmation
        </FormLabel>
        <InputGroup size="md">
          <Input bg="white"
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Confirm password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};

const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"}  mb="2%">
        User Details
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="name"

          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Nickname
        </FormLabel>
        <Input bg="white"
          type="text"
          name="Nickname"
          id="nickname"
          autoComplete="nickname"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder="dad-a-roony"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="date_of_birth"

          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Date of Birth
        </FormLabel>
        <Input bg="white"
          type="date"
          name="date_of_birth"
          id="date_of_birth"
          autoComplete="date-of-birth"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="name_of_spouse"

          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Name of Spouse
        </FormLabel>
        <Input bg="white"
          type="text"
          name="name_of_spouse"
          id="name_of_spouse"
          autoComplete="name-of-spouse"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>


      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"

          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          ZIP / Postal
        </FormLabel>
        <Input bg="white"
          type="integer"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </>
  );
};

const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} >
        Social Handles
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Website
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: "gray.800",
              }}
              color="gray.500"
              rounded="md"
            >
              http://
            </InputLeftAddon>
            <Input bg="white"
              type="tel"
              placeholder="www.example.com"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            About
          </FormLabel>
          <Textarea
            placeholder="you@example.com"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: "sm",
            }}
          />
          <FormHelperText>
            Brief description for your profile. URLs are hyperlinked.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default function Signup({onLogin}) {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={dadabasephoto}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      align={"center"}
      justify={"center"}
    >
      <Box
        bg="whiteAlpha.600"

        rounded="lg"
        shadow="lg"
        maxWidth={800}
        p={8}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? <Form1 onLogin={onLogin}/> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="blue"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="blue"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </Flex>
  );
}

// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Stack,
//   Link,
//   Button,
//   Heading,
//   Text,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { Link as RouterLink, Route } from "react-router-dom";
// import dadabasephoto from "../dadabase.jpg";

// function Signup({ onLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordConfirmation, setPasswordConfirmation] = useState("");
//   const [name, setName] = useState("");
//   const [errors, setErrors] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   function handleSubmit(e) {
//     e.preventDefault();
//     setErrors([]);
//     setIsLoading(true);
//     fetch("/people", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//         password_confirmation: passwordConfirmation,
//         name,
//       }),
//     }).then((r) => {
//       setIsLoading(false);
//       setEmail("");
//       setName("");
//       setPassword("");
//       setPasswordConfirmation("");
//       if (r.ok) {
//         r.json().then((user) => onLogin(user));
//       } else {
//         r.json().then((err) => setErrors(err.errors));
//       }
//     });

//   }

//   return (
//     <Flex
//       minH={"100vh"}
//       align={"center"}
//       justify={"center"}
//       backgroundImage={dadabasephoto}
//       backgroundSize={"cover"}
//       backgroundPosition={"center center"}
//     >
//       <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
//         <Stack align={"center"}>
//           <Heading fontSize={"4xl"} color={"white"}>Welcome to DaDabase!</Heading>
//           <Text fontSize={"lg"} color={"white"}>
//             Already a member?{" "}
//             <Link color={"yellow.300"} as={RouterLink} to="/login">
//               Login
//             </Link>{" "}
//             👊
//           </Text>
//         </Stack>
//         <Box
//           rounded={"lg"}
//           bg={useColorModeValue("white", "gray.700")}
//           boxShadow={"lg"}
//           p={8}
//         >
//           <Stack spacing={4}>
//             <FormControl
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             >
//               <FormLabel>First Name</FormLabel>
//               <Input type="name" />
//             </FormControl>
//             <FormControl
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             >
//               <FormLabel>Email address</FormLabel>
//               <Input type="email" />
//             </FormControl>
//             <FormControl
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               autoComplete="current-password"
//             >
//               <FormLabel>Password</FormLabel>
//               <Input type="password" />
//             </FormControl>
//             <FormControl
//               id="password"
//               value={passwordConfirmation}
//               onChange={(e) => setPasswordConfirmation(e.target.value)}
//               autoComplete="current-password"
//             >
//               <FormLabel>Password Confirmation</FormLabel>
//               <Input type="password" />
//             </FormControl>
//             <Stack spacing={10}>
//               <Stack
//                 direction={{ base: "column", sm: "row" }}
//                 align={"start"}
//                 justify={"space-between"}
//               ></Stack>
//               <Button
//                 bg={"blue.400"}
//                 color={"white"}
//                 _hover={{
//                   bg: "blue.500",
//                 }}
//                 onClick={handleSubmit}
//               >
//                 Signup
//               </Button>
//             </Stack>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// }

// export default Signup;
