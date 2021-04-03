import { Box } from "@chakra-ui/react";


import Head from "next/head";

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
      </Box>
    </>
  );
};

export default Index;