"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { updatePokemonApi } from "../redux/service/PokemonService";
import { updatePokemon } from "../redux/slice/PokemonSlice";

import { useAppSelector, useAppDispatch } from "../redux/store/hooks";
import Spinners from "./Spinners";
import PokemonCard from './PokemonCard';

export default function PopUpForEdit({ pokemon }) {
  const [formFields, setFormFields] = useState(pokemon?.abilities);
  const [initialPokemon, setInitialPokemon] = useState({
    name: pokemon?.name,
    price: pokemon?.price,
    imageUrl: pokemon?.imageUrl,
    type: pokemon?.type
  });

  const dispatch = useAppDispatch();


  // Get User Input
  const onUserInput = (e) => {
    const { name, value } = e.target;
    setInitialPokemon((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormChange = (event, index) => {
    const { value } = event.target;
    const data = [...formFields];
    data[index] = value;
    setFormFields(data);
  };

  const addFields = () => {
    setFormFields([...formFields, ""]);
  };

  const submit = (e) => {
    // e.preventDefault();
    let object = {
      ...initialPokemon,
      abilities: formFields,
    };
    updatePokemonApi(pokemon?.name, object).then((res) => {
      const name = pokemon?.name;
      const pokemonData = res?.data?.payload;
      dispatch(updatePokemon({name, pokemonData}));
    });
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div className="modal-box bg-whitesmoke">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <span className="text-xl font-poppins font-black">Edit project</span>
        </div>
        <div className="">
          <div class="mb-6">
            <label
              for="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              name
            </label>
            <input
              type="text"
              name="name"
              value={initialPokemon?.name}

              onChange={onUserInput}
              id="large-input"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              price
            </label>
            <input
              type="text"
              name="price"
              value={initialPokemon?.price}

              onChange={onUserInput}
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              imageUrl
            </label>
            <input
              type="text"
              name="imageUrl"
              value={initialPokemon?.imageUrl}

              onChange={onUserInput}
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              type
            </label>
            <input
              type="text"
              name="type"
              value={initialPokemon?.type}
              onChange={onUserInput}
              id="base-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          {formFields.map((form, index) =>
            formFields?.length < 2 ? (
              <div key={index}>
                <label
                  for="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ability {index + 1}
                </label>
                <input
                  name="ability"
                  onChange={(event) => handleFormChange(event, index)}
                   value={form}
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            ) : (
              <div key={index + 1}>
                <label
                  for="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ability {index + 1}
                </label>
                <input
                  name="ability"
                  onChange={(event) => handleFormChange(event, index)}
                   value={form}
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                <button onClick={() => removeFields(index)}>Remove</button>
              </div>
            )
          )}
          <button onClick={addFields}>Add More..</button>
        </div>
      </div>

      {/* buttons */}
      <div className="flex justify-end font-poppins">
        <div className="w-1/2 flex justify-evenly">
          {/* cancel button */}

          <div className="modal-action">
            <label
              htmlFor={`my_modal_edit_${pokemon?.name}`}
              className="text-slate-500 text-lg btn btn-ghost hover:btn-ghost hover:delay-150 capitalize"
            >
              Cancel
            </label>
          </div>
          {/* save button */}
          <div className="modal-action">
            <button
            // onClick={() => {
            //   editProjectHandler(projectName);
            // }}
            >
              <label
              onClick={submit}
                htmlFor={`my_modal_edit_${pokemon?.name}`}
                className="text-yellow-400 text-lg btn btn-ghost hover:btn-warning hover:delay-150 capitalize"
              >
                {false ? <Spinners /> : "Edit"}
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
