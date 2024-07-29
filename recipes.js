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
export async function updateRecipeByID(requestId, updatedRecipe) { 
    let index = recipes.findIndex(({id }) => (id === requestId));
    if (index === -1) {
        throw new Error(`No recipe with ID ${requestId} found.`);
    }
    recipes[index] = updatedRecipe;
    return recipes;
}



// DELETE A RECIPE BY ID
export async function deleteRecipeByID(requestId) {
    let index = recipes.findIndex(({id }) => (id === requestId));
    if (index === -1) {
        throw new Error(`No recipe with ID ${requestId} found.`);
    }
    const deletedRecipe = recipes[index];
    recipes.splice(index, 1);
    console.log(deletedRecipe);
    return deletedRecipe;
 }

 deleteRecipeByID("12345");
