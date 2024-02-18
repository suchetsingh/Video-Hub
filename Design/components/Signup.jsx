import React from "react";
import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <form>
        <VStack
          alignItems={"stretch"}
          spacing={"8"}
          w={["full", "96"]}
          m={"auto"}
          my={16}
        >
          <Heading>Video Hub</Heading>
          <Avatar alignSelf={"center"} boxSize={32}/>
          <Input
            placeholder="Enter your name"
            type="name"
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Type email"
            type="email"
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Enter your password"
            type="password"
            focusBorderColor="purple.500"
          />
          <Button colorScheme="purple" type="submit">
            Sign Up
          </Button>
          <Text textAlign={"right"}>
            Already Signed Up?{" "}
            <Button variant={"link"} colorScheme="purple">
              <Link to={"/login"}>Login</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
