import React from 'react'
import { Box , Stack,Text} from '@chakra-ui/react'
import { NotesWrap } from './Styled';
import YellowCard from './YellowCard';
import RedCard from './RedCard';
import PurpleCard from './PurpleCard';
import SerchedCard from './SerchedCard';


const NotesList = () => {

 


   

  return (
  
    <Box p={4}  color='black'> 
      
           <Stack >
   
           <NotesWrap>
            
            <YellowCard />
            <RedCard />
            <PurpleCard />
        
            

           
             
               
                
              
                </NotesWrap>
</Stack>

</Box> 

  )
}

export default NotesList