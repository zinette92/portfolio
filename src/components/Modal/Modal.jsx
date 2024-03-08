import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Modal(props) {
  console.log(props.open);
  if (props.open) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
    return null;
  }

  return (
    <div
      onClick={props.onClose}
      className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-black bg-opacity-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed flex h-5/6 w-4/6 flex-col items-center gap-4 rounded bg-white px-3 py-2"
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute right-0 top-0 mr-3 mt-4 h-6 w-6 cursor-pointer text-black"
          onClick={props.onClose}
        />
        <div className="flex w-full flex-col items-center">
          <h3 className="text-3xl font-bold text-blue-700">Booki</h3>
          <hr className="border-b-1 mt-2  w-full border-gray-300" />
        </div>
        <div>
          <h4 className="text-2xl font-bold">Description</h4>
        </div>
      </div>
    </div>
  );
}
