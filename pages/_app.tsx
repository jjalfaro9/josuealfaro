import { ChakraProvider } from "@chakra-ui/react"

function JosueAlfaro({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default JosueAlfaro