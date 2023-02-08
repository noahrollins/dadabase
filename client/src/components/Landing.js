import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
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
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
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
              to="/signup"
              bg={"blue.700"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Signup
            </Button>
            <Button
              as={RouterLink}
              to="/login"
              bg={"whiteAlpha.500"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.700" }}
            >
              Login
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}

export default Landing;
