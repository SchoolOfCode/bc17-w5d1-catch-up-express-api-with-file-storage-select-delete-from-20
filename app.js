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
app.get('/recipes/123', async (req, res) => {
  id = req.params.id;
  console.log(id);
  const requestedRecipe = await getRecipeByID(id);
  try {
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
app.post('/recipes', (req, res) => {
  const newRecipe = req.body;
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
app.patch('/recipes/:id', (req, res) => {
  //const recipeID = req.params;
  const updatedRecipe = req.body;
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

app.delete('/recipes/:id', (req, res) => {
  //const recipeID = req.params;
  try {
    res.status(200).json({
      'success': true,
      'payload': "deleted successfully"
    });

  } catch (e) {
    res.status(500).json({
      'success': false,
      'payload': null
    });
  };
});
