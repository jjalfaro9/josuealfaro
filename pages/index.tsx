import Head from "next/head";
import { Box, HStack } from "@chakra-ui/react";
import Socials from "../components/Socials";

const Index = () => {
  return (
    <>
      <Head>
        <title>Josué Alfaro</title>
      </Head>
      <Box
        bg="#f2efe5"
        bgImage="url(/josuealfaro.jpg)"
        bgPosition="center"
        bgRepeat="no-repeat"
        backgroundSize="contain"
        bgSize="contain"
        h="100vh"
      >
        <HStack
          position="fixed"
          top="85%"
          left="50%"
          transform="translate(-50%, -50%)"
          spacing="32px"
        >
          <Socials />
        </HStack>
      </Box>
    </>
  );
};

export default Index;