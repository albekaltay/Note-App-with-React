import React from "react";
import { Box, ChakraProvider } from '@chakra-ui/react'
import NotesPage from "./components/NotesPage";

 

function App() {
  return (
<ChakraProvider>
    <React.Fragment>
        <Box bg="#F9F6EE	"> 
     <NotesPage />
     </Box>
    </React.Fragment>
    </ChakraProvider>
  );
}

export default App;
