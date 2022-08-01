import React from 'react'
import { Box,Text} from '@chakra-ui/react'
import { CenterWrap } from './Styled';

const Footer = () => {
  return (
    <Box w='100%'  color='black'>
    <CenterWrap>
    <Box style={{marginTop:"50px", marginBottom:"50px"}} > 
 
    <Text> Copyright © 2022 | ALBEK ALTAY </Text>
   
       </Box>
       </CenterWrap>
    
      </Box>
  )
}

export default Footer