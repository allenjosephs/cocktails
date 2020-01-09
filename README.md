# Drink.

Cocktails application designed to help users find their next favorite beverage, also including a section for non-alcoholic drinkers.

## Author

Joe Allen

## Usage

* Upon initial entry, users are shown all drinks.
* Navigate to sub-sections via the links at the top of the page (all, mixed, shots, teetotal)
* Scroll to browse the list of available drinks within the selected category
* Hover the mouse over a drink thumbnail to show the drink details callout
* Click the drink to freeze that drink in the drink details callout
    * Note: After clicking, hovering over other drinks will still temporarily change the callout details, however, moving the mouse off of the icons panel will show the selected drink.


## Unique Features

1. CSS Normalization
2. API (thecocktaildb)
3. React.js
4. Loading spinner

## Limitations
1. API is fairly denormalized making it difficult to separate drinks into categories (e.g. all ingredients are treated as equal.  For instance the only way to get all "vodka drinks" is to scan all drinks and all ingredients for an ingredient of vodka.
2. API is crowd-sourced with little or no data governance.  It therefore contains errors, repetitions (e.g., Whisky, Whiskey, whiskey) and other data-related anomalies.

## Potential future enhancements

1. Add shopping-cart feature which will allow users to add drinks and create a list of required ingredients
2. Add brewery module to help users find local breweries
3. Additional filters -- allow filter by drink type, ingredient, glass, main alcohol, etc.
