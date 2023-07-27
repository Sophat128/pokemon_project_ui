"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemonApi } from "../redux/service/PokemonService";
import { getAllPokemon } from "../redux/slice/PokemonSlice";
import { useAppSelector, useAppDispatch } from "../redux/store/hooks";
import Card from "../component/Card";
import PokemonCard from "../component/PokemonCard";
import Search from "../component/Search";
import PopUpForEdit from "../component/PopUpForEdit";
import PopUpForDelete from "../component/PopUpForDelete";
import PopUpForCreate from "../component/PopUpForCreate";

const PokemonPage = () => {
  const [resultsLimit, setResultsLimit] = useState(2);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [image, setImages] = useState([]);
  const [searchResultsProject, setSearchResultsProject] = useState([]);

  const allPokemon = useAppSelector((state) => state.pokemonReducer.allPokemon);
  const dispatch = useAppDispatch();

  useEffect(() => {
    //   setIsLoading(true);
    getAllPokemonApi().then((data) => {
      // setIsLoading(false);
      dispatch(getAllPokemon(data.data.payload));
    });
  }, []);

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.offsetHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (windowHeight + scrollTop >= documentHeight - 200) {
        setHasScrolled(true);
        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
          if (searchResultsProject?.length < resultsLimit) {
            return;
          }
          setResultsLimit((prevLimit) => prevLimit + 6);
        }, 2000);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [searchResultsProject, resultsLimit]);

  useEffect(() => {
    if (hasScrolled) {
      const timeoutId = setTimeout(() => {
        setResultsLimit((prevLimit) => prevLimit + 6);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [hasScrolled]);

  useEffect(() => {
    if (searchTerm === "") {
      setResultsLimit(6);
    }
  }, [searchTerm]);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    if (searchTerm.trim() !== "") {
      const filteredPokemon = allPokemon.filter((pokemon) =>
        pokemon?.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResultsProject(filteredPokemon);
      
    } else {
      setSearchResultsProject([]);
    }
    setHasScrolled(false);
  };

  return (
    <div>
      <form>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            onChange={handleSearch}
            value={searchTerm}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search pokemon character ..."
            required
          />
        </div>
        <label htmlFor="my_modal_create" className="btn mt-10 bg-blue-500 px-10 text-white hover:bg-blue-600">
          Create
                </label>
      </form>

      <div className="flex gap-3 w-full mt-10 flex-wrap">
        {searchTerm === ""
          ? allPokemon.map((pokemon) => <PokemonCard pokemon={pokemon} />)
          : searchResultsProject.map((pokemon) => (
              <PokemonCard pokemon={pokemon} />
            ))}
       
      </div>

      {/* PopUp for create */}
      <input type="checkbox" id="my_modal_create" className="modal-toggle" />
      <div className="modal">
        <PopUpForCreate/>
      </div>
      

     
    </div>
  );
};

export default PokemonPage;
