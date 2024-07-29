import express from "express";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

//This handler function will return all the recipes we have when called
app.get('/recipes', (req, res) => {
  try {
    res.status(200).send("test string")
} catch (e) {
  res.status(404).send("that resource does not exist")
  console.error(e)
}
});

app.get ('/recipes/123', (req, res) => {
  try {
    res.status(200).send("test string 123")
} catch (e) {
  console.error(e)
  res.status(404).send("that resource does not exist 123")
}
});
