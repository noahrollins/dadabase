import React, { useContext, useEffect } from "react";
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
} from "@chakra-ui/react";


function FavoritesCard({ key, value }) {


    return (
      <Box w={"50%"}>
          <Card>
            <CardHeader>
              <Heading size="md">Favorite {key} </Heading>
            </CardHeader>
            <CardBody>
              <Text>{value}</Text>
            </CardBody>
          </Card>
      </Box>
    );
  }

export default FavoritesCard;