import Head from "next/head";
import { Box, HStack } from "@chakra-ui/react";
import Socials from "../components/Socials";

const Index = () => {
  return (
    <>
      <Head>
        <title>Josué Alfaro</title>
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#cbaa6e" />
        <meta name="msapplication-TileColor" content="#cbaa6e" />
        <meta name="theme-color" content="#ffffff" />
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