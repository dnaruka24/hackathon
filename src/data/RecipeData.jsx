import React from "react";
import Snacks from "./categories/Snacks";
import Chinese from "./categories/Chinese";
import Healthy from "./categories/Healthy";
import Indian from "./categories/Indian";
import Drinks from "./categories/Drinks";
import RanveerSpecial from "./categories/RanveerSpecial";

const RecipeData = [
  { category: "Indian", data: Indian },
  { category: "Ranveer Special", data: RanveerSpecial },
  { category: "Snacks", data: Snacks },
  { category: "Drinks", data: Drinks },
  { category: "Chinese", data: Chinese },
  { category: "Healthy", data: Healthy },
];

export default RecipeData;
