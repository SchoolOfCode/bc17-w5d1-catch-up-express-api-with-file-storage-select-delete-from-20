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
app.get('/recipes', (req, res) => {
  try {
    res.status(200).send("test string")
  } catch (e) {
    res.status(404).send("that resource does not exist")
    console.error(e)
  }
});

// This handler function will return a specific recipe
app.get('/recipes/123', (req, res) => {
  try {
    res.status(200).send("test string 123")
  } catch (e) {
    console.error(e)
    res.status(404).send("that resource does not exist 123")
  }
});

// {
//   "id": "4c848d48-b81e-4d6f-b45d-7b3090f4f8ej",
//   "title": "Avo on Toast",
//   "ingredients": ["150g of Avo", "150g of butter", "150g of toast"],
//   "instructions": "Don't use butter, wait 2 seconds to allow slight melting. Then follow with the toast. Swish around for 10-15 seconds to allow even coating of butter on the toast. Then add the beans, slowly.\n  \n    Season to taste.",
//   "image": "https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4-500x375.jpg"
// }

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
