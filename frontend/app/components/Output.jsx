import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";

const Output = ({ output, handleCompilation }) => {

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1008);
  };

  return (
    <Box >

      <HStack>

        <Text mb={4} fontSize="lg">
          Output:
        </Text>

        <Button
          variant="outline"
          colorScheme="green"
          mb={4}
          isLoading={isLoading}
          onClick={() => {
            handleCompilation();
            handleClick();
          }}
        >
          Run Code
        </Button>

      </HStack>

      <Box
        height="47.2vh"
        p={2}
        border="1px solid"
        borderRadius={4}
        borderColor={"#333"}
      >
        {output ? output : 'Click "Run Code" to see the output here'}
      </Box>
    </Box>
  );
};
export default Output;