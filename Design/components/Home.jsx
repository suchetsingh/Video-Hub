import React from "react";
import { Box, Container, Heading, Img, Stack, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";
import { transform } from "framer-motion";

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",
  size: "4xl",
};
const Home = () => {
  return (
    <div>
      <Box>
        <MyCarousel />
        <Container maxW={"container.xl"} minH={"100vh"} p={"16"}>
          <Heading
            textTransform={"uppercase"}
            py={2}
            w={"fit-content"}
            borderBottom={"2px solid"}
            m={"auto"}
          >
            Services
          </Heading>

          <Stack h="full" p={4} direction={["column", "row"]}>
            <Img
              src={img5}
              h={["40", "400"]}
              filter={"hue-rotate(-1300deg)"}
            ></Img>
            <Text
              letterSpacing={"widest"}
              lineHeight={"190%"}
              p={["4", "6"]}
              textAlign={"center"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, repellat optio praesentium, quas adipisci facere totam
              perferendis qui dignissimos repellendus asperiores expedita itaque
              soluta est ipsa ad pariatur harum eveniet! Facere quia fugit
              reprehenderit dolor cupiditate, voluptatum sit sapiente
              necessitatibus quisquam, iste repellat soluta iure laborum?
              Nostrum quis doloremque laborum tempora dignissimos voluptas
              magnam accusantium veritatis, non soluta ea? Id quasi rem possimus
              maxime officiis quis, harum fugit. Officia ducimus sunt minus
              exercitationem, aliquam sit architecto ad illum laboriosam
              perferendis! Impedit consequuntur quidem tempore delectus
              inventore perspiciatis iure blanditiis assumenda excepturi laborum
              numquam odit omnis, non rerum at neque cum?
            </Text>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showArrows={false}
      showThumbs={false}
    >
      <Box w="full" h={"100vh"}>
        <Img src={img1} />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
          Watch The Future
        </Heading>
      </Box>
      <Box w="full" h={"100vh"}>
        <Img src={img2} />
        <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions}>
          Futuristic Gaming
        </Heading>
      </Box>
      <Box w="full" h={"100vh"}>
        <Img src={img3} />
        <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
          Gaming on Console
        </Heading>
      </Box>
      <Box w="full" h={"100vh"}>
        <Img src={img4} />
        <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
          Nightlife is Cool
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
