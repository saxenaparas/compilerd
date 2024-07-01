import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";
import CodeEditor from "./components/CodeEditor";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Header />
        <CodeEditor />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}
