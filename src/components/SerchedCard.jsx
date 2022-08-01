import React from 'react'
import { Box ,Text} from '@chakra-ui/react'
import YellowCard from './YellowCard'
import RedCard from './RedCard'
import PurpleCard from './PurpleCard'
import { useSelector } from 'react-redux';
import { CenterWrap } from './Styled'



const SerchedCard = () => {

  const searchedColor = useSelector(state => state.notes.searchedColor)

  
  return (
  
    <Box style={{width:"15%", marginLeft:"42.5%", marginRight:"42.5%"}}> 
    {searchedColor=== 'yellow' || searchedColor=== 'red' || searchedColor=== 'purple' ? <CenterWrap> <Text style={{fontSize:22 ,color:"green",marginBottom:7}}> Searched Note </Text> </CenterWrap>: null}
    {searchedColor === 'yellow' && <YellowCard /> }
    {searchedColor === 'red' && <RedCard /> }
    {searchedColor === 'purple' && <PurpleCard /> } 
  </Box>

  )
}

export default SerchedCard