import React, {useEffect} from 'react'
import { Input,Box, Button} from '@chakra-ui/react'
import { CenterWrap } from './Styled';
import { useSelector,useDispatch } from 'react-redux';
import { updateSearchedColor } from '../redux/notesSlice';
import { Icon } from '@chakra-ui/react'
import { Search2Icon} from '@chakra-ui/icons'







const Search = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.notes.items)
  const [search, setSearch] = React.useState('');

  const filtered =  items.filter(item => item.note === search)

  const handleChangeColor = () => {
    dispatch(updateSearchedColor(filtered[0].color))
    setSearch('')
  }


  return (
    <Box   p={4} > 
    <CenterWrap> 
    <Input value={search} bg="#e2e8f0" style={{ marginRight:"10px", width:"20%"}} placeholder="Search" onChange={event => setSearch(event.target.value)}></Input>
    <Button onClick={handleChangeColor}> <Icon as={Search2Icon}> </Icon></Button>
    </CenterWrap>
    </Box>
  )
}

export default Search




  
