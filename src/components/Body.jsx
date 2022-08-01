import { Box } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components';
import Search from './Search';
import Form from './Form';
import NotesList from './NotesList';
import Header from './Header';
import SerchedCard from './SerchedCard';

const StyledBody = styled.section`
    border: 5px solid #98B4D4;
    border-radius: 35px;
    width: 70%;
    height: auto;
    background-color:#7FCDCD;
    margin-left:15%;
    margin-right:15%;
    margin-bottom:6.7%;
    padding:30px;
    box-shadow: 15px 15px black;


`;

const Body = () => {
  return (
    <StyledBody> 
     <Search></Search>
                <Form> </Form>
                <NotesList></NotesList>
                <SerchedCard> </SerchedCard>
    </StyledBody>
  )
}

export default Body