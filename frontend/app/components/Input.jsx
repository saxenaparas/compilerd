import { Box, VStack, Textarea, Text } from '@chakra-ui/react'
import { Editor } from '@monaco-editor/react'
import React from 'react'

const Input = ({ onChange }) => {
  return (
    <div className='mr-2'>
    <VStack>
      <Text style={{ fontSize: "20px"}} > Input: </Text>
      <Editor
        options={{
          lineNumbers: "off",
          minimap: {
            enabled: false,
          },
        }}
        height="6vh"
        width="20vw"
        theme="vs-dark"
        onChange={(value) => onChange({ target: { value } })}
      />
    </VStack>
    </div>
  )
}

export default Input