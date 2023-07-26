"use client";

import React, { useState } from "react";
import { NotifyError, NotifySucess } from "./Alert";
import Spinners from "./Spinners";
import { useAppSelector, useAppDispatch } from "../redux/store/hooks";
import { deletePokemonApi } from "../redux/service/PokemonService";
import { deletePokemon } from "../redux/slice/PokemonSlice";


export default function PopUpForDelete({pokemonName}) {


  const dispatch = useAppDispatch();

  const deletePokemonHandler = () => {
    deletePokemonApi(pokemonName)
        .then(() => {
          dispatch(deletePokemon(pokemonName));
          NotifySucess("Delete succesfully.");
        })
        .catch(() => {
          NotifyError("Failed to delete.");
        });
    }
  
  
  return (
    <div className=" relative 12pro:w-[90%] ipad-pro:w-[60%] laptop:w-[40%] bg-whitesmoke p-8 rounded-2xl shadow-xl">
      <div className="flex flex-col items-center">
        <div>
          <span className="font-black text-xl">
            Are you sure to delete {pokemonName} pokemon character?
          </span>
        </div>
        <div className="my-3">
          <span className="font-black text-sm">
            This {pokemonName} will permanently deleted, you cannot undo this
            action.
          </span>
        </div>
        {/* buttons */}
        <div className="flex justify-between w-1/2 font-poppins">
          {/* cancel button */}
          <div className="modal-action">
            <label
              htmlFor={`my_modal_delete_${pokemonName}`}
              className="text-slate-500 text-lg btn btn-ghost hover:btn-ghost hover:delay-150 capitalize"
            >
              cancel
            </label>
          </div>

          {/* delete and leave button */}
          <div className="modal-action">
            <label
              htmlFor={`my_modal_delete_${pokemonName}`}
              className="text-red-600 text-lg  btn btn-ghost hover:bg-red-600 hover:text-white hover:delay-150 capitalize"
              onClick={
                deletePokemonHandler
              }
            >
              {false ? <Spinners /> : `Delete`}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
