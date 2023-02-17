import { Center, Box, Button, Text, Collapse } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./contexts/UserContext";
import AddKidForm from "./AddKidForm";

function AddKidPrompt() {
  const { user, setUser } = useContext(UserContext);
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
    console.log(show);
  };

  useEffect(() => {
    fetch(`/people/${user.id}`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Center>
      <Box>
        <Text fontSize="2xl">Hmmm, no kids in here...</Text>
        <Button onClick={handleToggle} m={2}>
          Add Kiddos!
        </Button>
        <Collapse in={show} animateOpacity={show}>
          <AddKidForm />
        </Collapse>
      </Box>
    </Center>
  );
}

export default AddKidPrompt;
