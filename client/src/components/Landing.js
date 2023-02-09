import {
  Stack,
  Flex,
  Button,
  Text,
  HStack,
  useBreakpointValue,
  Heading
} from "@chakra-ui/react";
import dadabasephoto from "../dadabase.jpg";
import { Link as RouterLink } from "react-router-dom";

function Landing() {

  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={dadabasephoto}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
    >
      <HStack
        w={"full"}
        justify={"right"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Heading >DadaBase</Heading>
          <Text
            color={"whiteAlpha.800"}
            align={"right"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
          >
            “We didn’t realize we were making memories, we just knew we were
            having fun.” - A.A. Milne
          </Text>
          <Stack direction={"row"}>
            <Button
              as={RouterLink}
              to="/login"
              bg={"gray.600"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "gray.500" }}
            >
              Login
            </Button>
            <Button
              as={RouterLink}
              to="/signup"
              bg={"blue.700"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Signup
            </Button>
          </Stack>
        </Stack>
      </HStack>
    </Flex>
  );
}

export default Landing;
