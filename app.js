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

// This handler function will return all the recipes we have when called
app.get('/recipes', async (req, res) => {
  const allRecipes = await getRecipes();
  try {
    res.status(200).json({
      "success": true,
      "payload": allRecipes
    })
  } catch (e) {
    res.status(404).send("that resource does not exist")
    console.error(e)
  }
});

// This handler function will return a specific recipe
app.get('/recipes/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const requestedRecipe = await getRecipeByID(id);
    res.status(200).json({
      "success": true,
      "payload": requestedRecipe
    })
  } catch (e) {
    console.error(e)
    res.status(404).send("that resource does not exist 123")
  }
});

// This handler function will return all the recipes we have when called
app.post('/recipes', async (req, res) => {
  const recipeToAdd = req.body;
  const newRecipe = await createRecipe(recipeToAdd);
  try {
    res.status(201).json({
      'success': true,
      'payload': newRecipe
    });
  } catch (e) {
    res.status(300).json({
      'success': false,
      'payload': null
    });
  };
});

// This handler function will return all the recipes we have when called
app.patch('/recipes/:id', async (req, res) => {
  const recipeID = req.params.id;
  const recipeToUpdate = req.body;
  const updatedRecipe = await updateRecipeByID(recipeID, recipeToUpdate);
  try {
    res.status(200).json({
      'success': true,
      'payload': updatedRecipe
    });
  } catch (e) {
    res.status(404).json({
      'success': false,
      'payload': null
    });
  };
});

app.delete('/recipes/:id', async (req, res) => {
  const recipeID = req.params.id;
  const deletedRecipe = await deleteRecipeByID(recipeID);
  try {
    res.status(200).json({
      'success': true,
      'payload': deletedRecipe
    });

  } catch (e) {
    res.status(500).json({
      'success': false,
      'payload': null
    });
  };
});
