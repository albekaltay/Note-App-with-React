import React from 'react'
import { Box,Badge} from '@chakra-ui/react'
import { CenterWrap } from './Styled';

const Header = () => {
  return (
    <Box w='100%'  color='black'>
    <CenterWrap>
    <Box style={{marginTop:"50px", marginBottom:"50px"}} > 
 
    <Badge variant='outline' fontSize={25} colorScheme='blue'>
     Notes App 
  </Badge>
      
   
       </Box>
       </CenterWrap>
    
      </Box>
  )
}

export default Header