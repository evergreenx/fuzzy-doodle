import * as React from "react";
import Box from "@mui/material/Box";
import { getDate } from "./helpers/getDate";

export default function BasicCard() {
  return (
    <div className="bg-white shadow-sm w-[50%] mx-auto p-4 rounded-xl ">
      {getDate()}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
      dicta architecto incidunt eligendi, minus, ad, magnam aliquam voluptatum
      in doloribus nobis delectus ipsum ipsam nisi non necessitatibus possimus.
      Cupiditate, voluptates!
    </div>
  );
}
