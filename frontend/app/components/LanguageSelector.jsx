// "use client"

import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";


const languages = [
  {
    value: "C",
    lang: "C",
  },
  {
    value: "CPP",
    lang: "C++",
  },
  {
    value: "Java",
    lang: "Java",
  },
  {
    value: "nodejs",
    lang: "JavaScript",
  },
  {
    value: "Python",
    lang: "Python",
  },
  {
    value: "Ruby",
    lang: "Ruby",
  },
  {
    value: "Promptv1",
    lang: "Promptv1",
  },
  {
    value: "Promptv2",
    lang: "Promptv2",
  },
  {
    value: "Golang",
    lang: "Golang",
  }
];

const ACTIVE_COLOR = "blue.400";

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box ml={2} mb={4}>
      <HStack>

      <Text fontSize="lg">
        Language:
      </Text>

      <Menu isLazy>
        <MenuButton as={Button}>{language}</MenuButton>
        <MenuList bg="#110c1b">
          {languages.map(({lang, value}) => (
            <MenuItem
              key={value}
              color={value === language ? ACTIVE_COLOR : ""}
              bg={value === language ? "gray.900" : "transparent"}
              _hover={{
                color: ACTIVE_COLOR,
                bg: "gray.900",
              }}
              onClick={() => onSelect(value)}
            >
              {lang}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      </HStack>
    </Box>
  );
};
export default LanguageSelector;
