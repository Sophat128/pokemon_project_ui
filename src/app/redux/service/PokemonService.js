import { instance } from './InstanceHeader';


const getAllPokemonApi = async () => {
    try {
        const response = await instance.get(``)
        return response

    } catch (e) {
        console.error(e);
    }
};
const getPokemonByNameApi = async (pokemonName) => {
    try {
        const response = await instance.get(`/${pokemonName}`)
        return response

    } catch (e) {
        console.error(e);
    }
};
const updatePokemonApi = async (pokemonName, pokemonRequest) => {
    try {
        const response = await instance.put(`/${pokemonName}`, pokemonRequest)
        return response

    } catch (e) {
        console.error(e);
    }
};

const deletePokemonApi = async (pokemonName) => {
    try {
        const response = await instance.delete(`/${pokemonName}`)
        return response;
    } catch (e) {
        console.error(e);
    }
}

const addPokemonAPI = async (pokemonRequest) => {
    try {
        const pokemon = await instance.post(`/addPokemon`, pokemonRequest)
        return pokemon;
    } catch (e) {
        console.error(e);
    }
}

export {
    addPokemonAPI,
    deletePokemonApi,
    updatePokemonApi,
    getPokemonByNameApi,
    getAllPokemonApi
}