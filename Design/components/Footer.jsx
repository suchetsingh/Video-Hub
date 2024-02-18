import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={40} p={16} color={"white"}>
      <Stack direction={["column", "row"]}>
        <VStack alignItems={"stretch"} w={"full"}>
          <Heading size={"md"} textTransform={"uppercase"} textAlign={["center","left"]}>
            @Copyright reserved Suchet Singh
          </Heading>
          <HStack borderBottom={"2px solid white"} py="2">
            <Input
              placeholder="Enter email here..."
              border={"none"}
              borderRadius={"none"}
              outline={"none"}
              focusBorderColor="none"
            />
            <Button
              p={0}
              colorScheme="purple"
              variant={"ghost"}
              borderRadius={"0 20px 20px 0"}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={"full"}
          borderLeft={["none", "1px solid white"]}
          borderRight={["none", "1px solid white"]}
        >
          <Heading textTransform={"uppercase"} textAlign={"center"}>
            Video Hub
          </Heading>
          <Text>All rights reserved.</Text>
        </VStack>
        <VStack w={"full"}>
          <Heading size={"md"} textTransform={"uppercase"}>
            Social Media
          </Heading>
          <Button variant={"link"} colorScheme="" whiteAlpha>
            <a
              href="https://www.linkedin.com/in/suchet-singh-b9823023a/"
              target="_blank"
            >
              Linkedin
            </a>
          </Button>
          <Button variant={"link"} colorScheme="" whiteAlpha>
            <a href="https://github.com/suchetsingh" target="_blank">
              GitHub
            </a>
          </Button>
          <Button variant={"link"} colorScheme="" whiteAlpha>
            <a
              href="https://my-portfolio-git-main-suchetsinghs-projects.vercel.app/"
              target="_blank"
            >
              PortFolio
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
