import React from 'react'
import { Container, Heading } from "@chakra-ui/react"
const ForgotPassword = () => {
  return (
    <Container maxW={Container.xl} h={"100vh"} p={16}>
      <Heading mt={60}>
        I don't know how to reset your password 😔
      </Heading>
    </Container>
  )
}

export default ForgotPassword
