import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <div className="bg-white shadow-sm w-[50%] mx-auto p-4 rounded-xl ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
      dicta architecto incidunt eligendi, minus, ad, magnam aliquam voluptatum
      in doloribus nobis delectus ipsum ipsam nisi non necessitatibus possimus.
      Cupiditate, voluptates!
    </div>
  );
}
