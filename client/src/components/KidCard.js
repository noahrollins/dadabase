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
} from "@chakra-ui/react";
import { differenceInYears, differenceInDays, setYear } from "date-fns";
import React, { useContext, useEffect } from "react";
import { MdFilterCenterFocus } from "react-icons/md";
import { UserContext } from "./contexts/UserContext";

function KidCard({ kid }) {
  const { user, setUser } = useContext(UserContext);

  const birthday = new Date(kid.date_of_birth);
  const age = differenceInYears(new Date(), birthday);
  const currentDate = new Date();
  const nextBirthday = new Date(
    currentDate.getFullYear(),
    birthday.getMonth(),
    birthday.getDate()
  );

  if (nextBirthday < currentDate) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }

  const daysUntilBirthday = differenceInDays(nextBirthday, currentDate);
  return (
    <Card>
      <CardHeader>
        <Heading>{kid.name}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{age} years old</Text>
        <Text>
          {daysUntilBirthday < 31
            ? `Only ${daysUntilBirthday} days left!`
            : `${daysUntilBirthday} days to go!`}
        </Text>
      </CardBody>
    </Card>
  );
}

export default KidCard;
