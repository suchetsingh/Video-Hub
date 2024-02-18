import React, { useState } from "react";
import { Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";

const Videos = () => {
  const videosArr = [
    {
      videolink:
        "https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882",
      videoheading: "Beautiful City",
      description:
        "Experience the tranquil spectacle of clouds drifting above the bustling city. Watch as they elegantly sway, casting fleeting shadows on the urban landscape. Amidst skyscrapers and streets, witness nature's serene dance, offering a moment of calm amidst the vibrant pulse of city life. Revel in urban elegance.",
    },
    {
      videolink:
        "https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf",
      videoheading: "4K Serenity: The Frog's Tranquil Oasis",
      description:
        "Dive into the mesmerizing world of nature with stunning 4K clarity as a frog basks in its tranquil oasis. Watch as every ripple in the pond and every movement of the frog is vividly captured, offering a serene glimpse into the beauty of the natural world.",
    },
    {
      videolink:
        "https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174",
      videoheading: "Sky Symphony: A Cloud's Dance",
      description:
        "Immerse yourself in the ethereal beauty of the boundless sky. Witness the enchanting ballet of clouds as they gracefully drift and swirl, painting the heavens with hues of blue and white. Let the serene spectacle evoke a sense of wonder and tranquility within your soul.",
    },
    {
      videolink:
        "https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174",
      videoheading: "Skybound Harmony: Paragliding Duo",
      description:
        "Embark on an exhilarating journey as two men take flight, soaring through the boundless sky with grace and daring. Against the backdrop of majestic landscapes, witness their synchronized dance with the wind, a testament to courage, camaraderie, and the thrill of adventure in the open skies.",
    },
    {
      videolink:
        "https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78",
      videoheading: "Forest Whispers: Nature's Tapestry",
      description:
        "Enter the enchanting realm of the forest, where towering trees embrace the sky and sunlight filters through the canopy, painting the forest floor with a mosaic of leaves. Listen to the gentle whispers of the wind as it rustles through the foliage, weaving tales of tranquility and timeless beauty.",
    },
    {
      videolink:
        "https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281",
      videoheading: "Solitude's Crest: The Lone Surfer's Odyssey",
      description:
        "Witness the solitary journey of a man as he conquers the waves, a lone figure against the vast expanse of the ocean. With each graceful glide, he merges with the rhythm of the sea, finding harmony and freedom amidst the roaring tides. Experience the serenity of solo surfing.",
    },
    {
      videolink:
        "https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614",
      videoheading: "Seaside Symphony: Waves Embrace the Shore",
      description:
        "Dive into the mesmerizing spectacle of ocean waves crashing upon the sandy shore, a timeless dance between land and sea. Feel the rhythmic cadence of each wave as it rushes forth, painting fleeting patterns in the sand, while the salty breeze whispers tales of eternal tides and endless horizons.",
    },
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  const changeVideo = (videolink) => {
    setVideoSrc(videolink);
  };

  return (
    <>
      <Stack direction={["column", "row"]} h={"100vh"}>
        <VStack w={"full"}>
          <video
            autoPlay
            controls
            controlsList="nodownload"
            src={videoSrc.videolink}
            style={{ width: "100%" }}
          ></video>
          <VStack alignItems={"flex-start"} p={8} w={"full"} overflowY={"auto"}>
            <Heading>{videoSrc.videoheading}</Heading>
            <Text>{videoSrc.description}</Text>
          </VStack>
        </VStack>
        <VStack
          width={["full", "xl"]}
          alignItems={"stretch"}
          my={"3.5"}
          p={"8"}
          spacing={"8"}
          overflowY={"auto"}
        >
          {videosArr.map((item, index) => (
            <Button
              key={index}
              variant={"ghost"}
              colorScheme="purple"
              onClick={() => changeVideo(item)}
            >
              Video {index + 1}
            </Button>
          ))}
        </VStack>
      </Stack>
    </>
  );
};

export default Videos;
