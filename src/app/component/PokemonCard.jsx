"use client";

import React, { useEffect, useState } from "react";

// import manage from "../asset/img/icon/manage.svg";
// import deleteIcon from "../asset/img/icon/deleted.svg";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import PopUpForEdit from "./PopUpForEdit";
import PopUpForDelete from "./PopUpForDelete";
import PopUpForCreate from "./PopUpForCreate";

const PokemonCard = ({ pokemon }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [pokemonName, setPokemonName] = useState("");

  const handleToggleDropdown = () => {
    setPokemonName(pokemon?.name)
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
        <div className="relative">
          <button
            onClick={handleToggleDropdown}
            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className={`w-5 h-5 ${isDropdownOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </button>
          <div
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } absolute right-0 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2 dark:bg-gray-700`}
          >
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                {/* Open the modal using ID.showModal() method */}

                {/* The button to open modal */}
                <label htmlFor={`my_modal_edit_${pokemonName}`} className=" block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  edit
                </label>

                {/* Put this part before </body> tag */}
                
              </li>

              <li>
              <label htmlFor={`my_modal_delete_${pokemonName}`} className=" block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Delete
                </label>
               
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center pb-10">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold">{pokemon?.name}</h3>
              <h3 className="text-xl font-semibold">#{pokemon?.id}</h3>
            </div>
            <div className="flex justify-center items-center my-4">
              <img
                className="w-32 h-32"
                src={pokemon?.imageUrl}
                alt={pokemon?.name}
              />
            </div>
            <div>
              <p className="text-gray-600">Type: {pokemon?.type}</p>
              <div className="mt-2">
                <h4 className="font-semibold">Abilities:</h4>
                <ul className="list-disc list-inside">
                  {pokemon?.abilities?.map((ability, index) => (
                    <li key={index} className="text-gray-600">
                      {ability}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* PopUp for update */}
       <input type="checkbox" id={`my_modal_edit_${pokemonName}`} className="modal-toggle" />
      <div className="modal">
        <PopUpForEdit pokemon = {pokemon}/>
      </div>

      
      {/* PopUp for delete */}
      <input type="checkbox" id={`my_modal_delete_${pokemonName}`} className="modal-toggle" />
      <div className="modal">
        <PopUpForDelete pokemonName={pokemonName}/>
      </div>
    </div>
  );
};

export default PokemonCard;
