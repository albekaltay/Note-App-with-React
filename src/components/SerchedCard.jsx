import React, { useState,useEffect } from 'react'
import { Box ,Text} from '@chakra-ui/react'
import YellowCard from './YellowCard'
import RedCard from './RedCard'
import PurpleCard from './PurpleCard'
import { useSelector } from 'react-redux';
import { CenterWrap, NotesWrap } from './Styled'
import { SearchIcon } from '@chakra-ui/icons'




const SerchedCard = () => {




  

 
  const searchedColors = useSelector(state => state.notes.searchedItems)
  
  const yellowColor = searchedColors.find(item => item.color === 'yellow')
  const redColor = searchedColors.find(item => item.color === 'red')
  const purpleColor = searchedColors.find(item => item.color === 'purple')

 

  

  return (
  
    <Box style={{width:"97%", marginLeft:"auto", marginRight:"auto"}}> 
     {yellowColor  || redColor || purpleColor ? <CenterWrap> <Text style={{fontSize:22 ,color:"green",marginBottom:7}}> Searched Note </Text> </CenterWrap>: null} 
    <NotesWrap> 
    
    {yellowColor ? <YellowCard /> : null}
    {redColor ? <RedCard /> : null}
    {purpleColor ? <PurpleCard /> : null}

    </NotesWrap>

  </Box>

  )
}

export default SerchedCard