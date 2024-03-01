import React from "react";

const ImagePlainInput = () => {
  return (
    <div className="w-11/12 h-fit flex flex-col gap-0">
      <label
        className="block  text-sm font-medium text-gray-900"
        htmlFor="file_input"
      >
        Upload Image
      </label>
      <input
        className="block w-full text-sm p-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
        accept="image/*"
      />
    </div>
  );
};

export { ImagePlainInput };
