import React, {useState,useEffect} from 'react'
import { Box , Textarea,Grid,Button,useToast } from '@chakra-ui/react'
import { ColorSection_Add_Wrap, Wrap } from './Styled';
import { addNote } from '../redux/notesSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Icon } from '@iconify/react';



const Form = () => {

    const id = nanoid();
    const dispatch = useDispatch();
    const [note, setNote] = useState('');
    const [color, setColor] = useState("")

    const toast = useToast()
  
      
      



    const handleSubmit =  (event) => {
            
            event.preventDefault();

            if (color ==="yellow" || color ==="red" || color ==="purple") {
                dispatch(addNote({note:note,id:id,color:color}));
                toast({
                    title: 'New Note!',
                    description: `${note} is added successfully.`,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
            } else {
                toast({
                    title: 'Note is not added!',
                    description: "You have to select a color.",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
            }
            
              
            setNote('');
            setColor('');
    }


    const handleChangeYellow = () => {

        setColor("yellow")

    }
    const handleChangeRed = () => {

        setColor("red")

    }

    const handleChangePurple = () => {

        setColor("purple")

    }




  return (
    <Box  p={4}  color='black'> 
                    
              
    <Wrap> 
                   
    <Textarea bg="#e2e8f0" value={note} placeholder='Enter your note here...' onChange={event => setNote(event.target.value)}/>
    </Wrap>
        <Box  >
        <ColorSection_Add_Wrap> 
        <Grid templateColumns='repeat(5, 1fr)' gap={1}>
            <Button width="30px" height="30px" colorScheme='yellow' onClick={handleChangeYellow} >
            
            {color==="yellow" ?  <Icon style={{marginTop:'3',width:"25",height:"25",color:'white'}} icon="subway:tick"   />: ""}
           
            
            </Button>
            <Button width="30px" height="30px" colorScheme='red' onClick={handleChangeRed}>
            {color==="red" ?  <Icon style={{marginTop:'3',width:"22",height:"22",color:'white'}} icon="subway:tick"   />: ""}
            </Button>
            <Button width="30px" height="30px" colorScheme='purple' onClick={handleChangePurple}>
            {color==="purple" ?  <Icon style={{marginTop:'3',width:"22",height:"22",color:'white'}} icon="subway:tick"   />: ""}
            </Button>
          
            </Grid>

            <Button colorScheme='whatsapp' onClick={handleSubmit}>Add</Button>

            </ColorSection_Add_Wrap>   
        </Box>
              
        </Box>
   
  )
}

export default Form