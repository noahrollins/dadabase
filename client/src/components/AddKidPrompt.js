import { Center, Box, Button, Text, Collapse, useRangeSlider } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./contexts/UserContext";
import AddKidForm from "./AddKidForm";

function AddKidPrompt() {
  const { user, setUser } = useContext(UserContext);
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
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
        <Text fontSize="2xl">{user.kids.length == 0 ? "Hmmm... no kids in here" : "Got more?"}</Text>
        <Button onClick={handleToggle} m={2}>
          {user.kids.length == 0 ? "Add a Kid" : "Add Another Kid"}
        </Button>
        <Collapse in={show} animateOpacity={show}>
          <AddKidForm />
        </Collapse>
      </Box>
    </Center>
  );
}

export default AddKidPrompt;
