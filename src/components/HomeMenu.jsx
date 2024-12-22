import React from "react";
import SliderExample from "./SliderExample";

const HomeMenu = () => {
  return (
    <div className="justify-center bg-gray-200 text-center min-h-screen flex items-center">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="bg-blue-200 text-xl font-bold p-2 mb-4">Chess Menu</h2>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Select Color</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <button className="w-full py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
                White
              </button>
            </div>
            <div>
              <button className="w-full py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
                Black
              </button>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">
            Select Computer Difficulty
          </h2>
          <SliderExample />
        </div>

        <button className="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Start Game
        </button>
      </div>
    </div>
  );
};

export default HomeMenu;
