"use client";

import React, { useState } from "react";

const Card = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
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
              className={`w-5 h-5 ${isDropdownOpen ? 'rotate-180' : ''}`}
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
              isDropdownOpen ? 'block' : 'hidden'
            } absolute right-0 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2 dark:bg-gray-700`}
          >
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Export Data
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center pb-10">
        
        
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">{"name"}</h3>
          <h3 className="text-xl font-semibold">#{"id"}</h3>
        </div>
        <div className="flex justify-center items-center my-4">
          <img className="w-32 h-32" src={"image"} alt={"name"} />
        </div>
        <div>
          <p className="text-gray-600">Type: {"type"}</p>
          <div className="mt-2">
            <h4 className="font-semibold">Abilities:</h4>
            <ul className="list-disc list-inside">
              {/* {abilities.map((ability, index) => (
                <li key={index} className="text-gray-600">
                  {ability}
                </li>
              ))} */}
              <li>hello</li>
              <li>hello</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};
   

export default Card;
