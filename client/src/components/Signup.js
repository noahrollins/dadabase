import React, { useEffect, useState } from "react";
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
  Text,
  Link,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import dadabasephoto from "../dadabase2.jpg";
import { useToast } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Form1 = ({
  name,
  setFirstName,
  email,
  setEmail,
  password,
  setPassword,
  passwordConfirmation,
  setPasswordConfirmation,
}) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={"center"} mb="2%">
        Dad Basics
      </Heading>
      <Flex>
        <FormControl>
          <FormLabel htmlFor="first-name">First name</FormLabel>
          <Input
            bg="white"
            id="first-name"
            placeholder="First name"
            value={name}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          bg="white"
          id="email"
          type="email"
          placeholder="me@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormHelperText color="white">
          We'll never share your email.
        </FormHelperText>
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
    </>
  );
};

const Form2 = ({
  nickname,
  setNickname,
  dateOfBirth,
  setDateOfBirth,
  spouse,
  setSpouse,
  zipCode,
  setZipCode,
}) => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} mb="2%">
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
        <Input
          bg="white"
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
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
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
        <Input
          bg="white"
          type="date"
          name="date_of_birth"
          id="date_of_birth"
          autoComplete="date-of-birth"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
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
        <Input
          bg="white"
          type="text"
          name="name_of_spouse"
          id="name_of_spouse"
          autoComplete="name-of-spouse"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={spouse}
          onChange={(e) => setSpouse(e.target.value)}
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
        <Input
          bg="white"
          type="integer"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </FormControl>
    </>
  );
};

const Form3 = ({ name, petNumber, setPetNumber, kidNumber, setKidNumber }) => {



  useEffect(() => {
    setKidNumber(kidNumber);
    setPetNumber(petNumber);
  }, [petNumber, kidNumber]);


  return (
    <>
      <Heading w="100%" textAlign={"center"} pb={2}>
        Kids and Pets
      </Heading>
      <SimpleGrid minChildWidth='120px' spacing={4}>
        <FormControl as={GridItem} onChange={(e) => setKidNumber(e.target.value)}>
          <FormLabel
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            How many kids, {name}?
          </FormLabel>
          <Select placeholder="#"  bg={'white'} onChange={(e) => setKidNumber(e.target.value)} value={kidNumber}>
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9 - you can always add more later! 😁</option>
          </Select>
        </FormControl>
        <FormControl as={GridItem} >
          <FormLabel
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            What about pets?
          </FormLabel>
          <Select placeholder="#"  bg={'white'} onChange={(e) => setPetNumber(e.target.value)} value={petNumber}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9 - you can always add more later! 😁</option>
          </Select>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default function Signup({ onLogin }) {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nickname, setNickname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [spouse, setSpouse] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [petNumber, setPetNumber] = useState(0);
  const [kidNumber, setKidNumber] = useState(0);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/people", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        password_confirmation: passwordConfirmation,
        name: firstName,
        nickname,
        date_of_birth: dateOfBirth,
        spouse,
        zip_code: zipCode,
      }),
    }).then((r) => {
      setIsLoading(false);
      setEmail("");
      setFirstName("");
      setPassword("");
      setPasswordConfirmation("");
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/login");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    for (let i = 0; i < kidNumber; i++) {
      fetch(`/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: { kid: true } }),
      });
    }

    for (let i = 0; i < petNumber; i++) {
      fetch("http://your-api-endpoint.com/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pet: { name: "Pet name" } }),
      });
    }
  };
  

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
        {step === 1 ? (
          <Form1
            onLogin={onLogin}
            name={firstName}
            setFirstName={setFirstName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            passwordConfirmation={passwordConfirmation}
            setPasswordConfirmation={setPasswordConfirmation}
          />
        ) : step === 2 ? (
          <Form2
            nickname={nickname}
            setNickname={setNickname}
            dateOfBirth={dateOfBirth}
            setDateOfBirth={setDateOfBirth}
            spouse={spouse}
            setSpouse={setSpouse}
            zipCode={zipCode}
            setZipCode={setZipCode}
          />
        ) : (
          <Form3 name={firstName} kidNumber={kidNumber} setKidNumber={setKidNumber} petNumber={petNumber} setPetNumber={setPetNumber} />
        )}
        <Text fontSize={"sm"} color={"white"} pt={5}>
          Already a member?{" "}
          <Link color={"blue.700"} as={RouterLink} to="/login">
            Login
          </Link>{" "}
          👊
        </Text>
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
                mr="5%"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={handleSubmit}
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
