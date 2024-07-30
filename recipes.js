import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";
// import recipes from "./recipes.json" with {type: "json"};

const fileName = "./recipes.json";

// GET ALL RECIPES
export async function getRecipes() {
    try {
        const recipes = await fs.readFile(fileName, "utf-8");
        return JSON.parse(recipes);
    } catch (e) {
        console.error(e);
    };
};

// GET A RECIPE BY ID
export async function getRecipeByID(requestId) {
    try {
        // read all the recipes from our JSON file
        const data = await fs.readFile(fileName, "utf-8");
        const recipes = JSON.parse(data);
        // use the requestID provided to search the recipes stored in the variable recipes
        const recipe = recipes.find(({ id }) => id === requestId);
        return recipe;
    } catch (e) {
        console.error(e);
    };
};

// CREATE A RECIPE
export async function createRecipe(newRecipe) {
    const newRecipeObject = {
        id: uuid(),
        ...newRecipe
    }
    recipes.push(newRecipeObject)
    return newRecipe
}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(requestId, updatedRecipe) {
    let index = recipes.findIndex(({ id }) => (id === requestId));
    if (index === -1) {
        throw new Error(`No recipe with ID ${requestId} found.`);
    }
    recipes[index] = updatedRecipe;
    return recipes;
}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(requestId) {
    let index = recipes.findIndex(({ id }) => (id === requestId));
    if (index === -1) {
        throw new Error(`No recipe with ID ${requestId} found.`);
    }
    const deletedRecipe = recipes[index];
    recipes.splice(index, 1);
    return deletedRecipe;
}
