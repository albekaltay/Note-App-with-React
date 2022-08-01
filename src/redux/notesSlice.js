import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
     items : [
        {note: "Note 1",id:1,color:""},
     ],
};

export const notesSlice = createSlice({
    name: "Notes Slice",
    initialState,
    searchedColor: "",
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload);
           
            
         
        },
        updateSearchedColor: (state,action) => {
            state.searchedColor = action.payload
            console.log(state.searchedColor);
        
        },
        updateNote: (state, action) => {

           const { id, note } = action.payload;
            console.log(id, note);
        
        
            const item = state.items.findIndex(item => item.id === id);
             state.items[item].note = note;
               

        },
        deleteNote: (state, action) => {
            const { id } = action.payload;
             const filtered = state.items.filter(item => item.id !== id);
            state.items = filtered;

        }    
        
    }


})

export const { deleteNote,updateNote,addNote,updateSearchedColor} = notesSlice.actions;
export default notesSlice.reducer;