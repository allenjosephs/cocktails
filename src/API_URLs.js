

// Seach by cocktail name
export const API_CKTL_BY_NAME =
         `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_CKTL_API_KEY}/search.php?s=`;

// Search cocktails by first letter
export const API_CKTLS_BY_FIRST_LETTER =
         `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_CKTL_API_KEY}/search.php?f=`;

// Search by ingredient
export const API_INGREDIENT_BY_NAME =
         `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_CKTL_API_KEY}/search.php?i=`;

// Lookup full cocktail details by id
export const API_CKTL_BY_ID =
         `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_CKTL_API_KEY}/lookup.php?i=`;

// Lookup ingredient by ID
// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552

// Lookup a random cocktail
// https://www.thecocktaildb.com/api/json/v1/1/random.php

// Search by ingredient
// https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
// https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka

// Get all alcoholic drinks
export const API_CKTL_ALL_ALCOHOLIC = `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_CKTL_API_KEY}/filter.php?a=Alcoholic`;

// Get all non-alcoholic drinks
export const API_CKTL_ALL_NON_ALCOHOLIC =
         `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_CKTL_API_KEY}/filter.php?a=Non_Alcoholic`;

// Get all shots
export const API_CKTL_ALL_SHOTS =
         `https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_CKTL_API_KEY}/filter.php?c=Shot`;

// Filter by Glass
// https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass
// https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute

// List the categories, glasses, ingredients or alcoholic filters
// https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
// https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list
// https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
// https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list


//  Images
// Drink thumbnails
// Add /preview to the end of the cocktail image URL
// https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview (100x100 pixels)


// Ingredient Thumbnails
// https://www.thecocktaildb.com/images/ingredients/gin-Small.png (100x100 pixels)
// https://www.thecocktaildb.com/images/ingredients/gin-Medium.png (350x350 pixels)
// https://www.thecocktaildb.com/images/ingredients/gin.png (700x700 pixels)