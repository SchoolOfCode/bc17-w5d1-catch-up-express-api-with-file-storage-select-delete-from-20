import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";
import recipes from "./recipes.json" with {type: "json"};

//const fileName = "recipes.json";

// GET ALL RECIPES
export async function getRecipes() {
    return recipes;
}
// console.log(getRecipes());

// GET A RECIPE BY ID
export async function getRecipeByID(requestId) {
    const recipe = recipes.find(({ id }) => (id === requestId));
    return recipe;
}

// CREATE A RECIPE
export async function createRecipe(newRecipe) { 
    recipes.push(newRecipe)
    return newRecipe
}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) { }

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) { }
