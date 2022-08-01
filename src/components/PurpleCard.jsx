import React from 'react'
import {
  Box, UnorderedList,ListItem,Accordion,AccordionItem,AccordionButton,AccordionIcon,AccordionPanel, useDisclosure, Link,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, Button,Textarea
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { StyledCard } from './Styled';
import { updateNote, deleteNote } from '../redux/notesSlice';





const PurpleCard = () => {

    const dispatch = useDispatch();
    const items = useSelector(state => state.notes.items);
    const purpleItems = items.filter(item => item.color === 'purple');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [newNote, setNewNote] = React.useState('');

    const handleUpdateModalButton =  (id,newNote) => {
       dispatch(updateNote(id, newNote))
        onClose()
 
    }
    const handleDeleteModalButton = (id) => {
        dispatch(deleteNote(id))
        onClose()
    }
    

  return (
    <StyledCard>
    <Accordion defaultIndex={[0]} bg={"#f0f0f0"}  allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton bg={"#805ad5"}>
        <Box  flex='1' textAlign='left' fontSize={23} >
          Note 3
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     
    <UnorderedList>


    {purpleItems.map(item => ( <ListItem color={"#805ad5"} key={item.id}> 
    
    <Link onClick={onOpen}> {item.note}  </Link>

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Note Settings </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Textarea bg="white"  defaultValue={item.note} onChange={event => setNewNote(event.target.value)}/>

          
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={() => handleDeleteModalButton({id:item.id})} >
              Delete
            </Button>
            <Button colorScheme='green'  type="submit" mr={3} onClick={() => handleUpdateModalButton({id :item.id,note :newNote})} >Edit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    
       </ListItem>))}

     
      
                 
                    </UnorderedList>
    </AccordionPanel>
  </AccordionItem>
     </Accordion>

</StyledCard>

  )
}

export default PurpleCard