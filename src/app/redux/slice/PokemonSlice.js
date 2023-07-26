import {

  createSlice
} from "@reduxjs/toolkit";



const initialState = {
  allPokemon: [],
 
}

export const ProjectSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    getAllPokemon: (state, action) => {
      state.allPokemon = action.payload
    },
    
    addPokemon: (state, action) => {
      state.allPokemon.unshift(action.payload);
    },
    
    deletePokemon: (state, action) => {
      const 
        deleteName
     = action.payload;
      console.log("Delete name: ", deleteName)
      state.allPokemon = state.allPokemon.filter(item => item.name !== deleteName)
    },
    

    updatePokemon: (state, action) => {
      const {
        name,
        pokemonData
      } = action.payload;
      console.log("name: ", name);
      console.log("Data: ", pokemonData);


      const index = state.allPokemon.findIndex(item => item.name === name);
  
      state.allPokemon[index] = pokemonData;
    },
    
    
  },
}); 

// export const {reducers} = counterSlice.actions;
export const {
  getAllPokemon,
  addPokemon,
  updatePokemon,
  deletePokemon
} = ProjectSlice.actions;
export default ProjectSlice.reducer;