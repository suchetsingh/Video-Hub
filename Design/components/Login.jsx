import React from "react";
import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <form>
        <VStack
          alignItems={"stretch"}
          spacing={"8"}
          w={["full","96"]}
          m={"auto"}
          my={16}
        >
          <Heading>Welcome back</Heading>
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

          <Button variant={"link"} alignSelf={"flex-end"}>
            <Link to={"/forgotpassword"}>Forgot password</Link>
          </Button>
          <Button colorScheme="purple" type="submit">
            Log In
          </Button>
          <Text textAlign={"right"}>
            New User?{" "}
            <Button variant={"link"} colorScheme="purple">
              <Link to={"/signup"}>Signup</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
