"use client"

import { useRef, useState } from "react";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { compileCode } from "../utils/helpers";
import { testJson } from "../utils/testJson";
import Output from "./Output";
import Input from "./Input";

const CodeEditor = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("C");
  const file = testJson[selectedLanguage];
  const [code, setCode] = useState(file.value);
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState();
  const editorRef = useRef(null);

  const handleCompilation = async () => {
    setCode(getEditorValue());
    const result = await compileCode(
      selectedLanguage.toLowerCase(),
      code,
      inputValue
    );
    setOutput(result !== undefined ? result.toString() : "No output");
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setCode(testJson[language]?.value);
  };
  
  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  function getEditorValue() {
    return editorRef.current.getValue();
  }

  return (
    <Box className="mb-24 ml-10">
      <HStack spacing={4}>
        <Box w="75%">
          <LanguageSelector language={selectedLanguage} onSelect={handleLanguageChange} />
            <Editor
              // options={{
              //   minimap: {
              //     enabled: false,
              //   },
              // }}
              height="60vh"
              theme="vs-dark"
              onMount={handleEditorDidMount}
              path={file.name}
              defaultLanguage={file.language}
              defaultValue={file.value}
              onChange={() => setCode(getEditorValue())}
            />
        </Box>
        <VStack>
        <Output
          output={output}
          handleCompilation={handleCompilation}
        />
        <Input onChange={(e) => setInputValue(e.target.value)} />
        </VStack>
      </HStack>
    </Box>
  );
};
export default CodeEditor;
