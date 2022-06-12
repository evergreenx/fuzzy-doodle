import * as React from "react";
import Box from "@mui/material/Box";
import { getDate } from "./helpers/getDate";
import Divider from "@mui/material/Divider";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

console.log(getDate());

const { day, year, month, dayString } = getDate();

export default function BasicCard() {
  const getOrdinalNum = (number) => {
    let selector;

    if (number <= 0) {
      selector = 4;
    } else if ((number > 3 && number < 21) || number % 10 > 3) {
      selector = 0;
    } else {
      selector = number % 10;
    }

    return number + ["th", "st", "nd", "rd", ""][selector];
  };

  return (
    <div className="bg-white shadow-sm w-[50%] mx-auto p-4 rounded-xl ">
      <div className="flex items-center justify-between py-2 ">
        <h1 className="text-2xl font-bold">
          {dayString}
          <span className="">,</span>
          <span className="text-gray-600 font-normal">
            {getOrdinalNum(day)}
          </span>
        </h1>
        {<p className="text-sm text-gray-300 ">length of tasks</p>}
      </div>
      <h4 className="text-gray-400 text-xl pb-5">{month}</h4>

      <Divider />

      <div className="relative top-[-1.9rem] left-72">
        <Fab color="" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}
