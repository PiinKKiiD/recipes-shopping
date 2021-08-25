import {EventEmitter, Injectable} from '@angular/core'
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();
  recipeSelected = new Subject<Recipe>()
  /*private recipes: Recipe[] = [
    new Recipe('Shakshuka',
      'Shakshuka is a North African and Middle Eastern meal of poached eggs in a simmering tomato sauce ...',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
      [new Ingredient('onion (diced)',1 ),
                new Ingredient(' garlic cloves (finely chopped)',4 ),
                new Ingredient(' tsp paprika',2 ),
                new Ingredient(' tsp cumin',2 ),
                new Ingredient('red bell pepper (seeded and diced)', 1)]),
    new Recipe('Grilled Sweet Potatoes',
      'Slices of sweet potatoes grilled and slathered with a cilantro-lime dressing.',
      'https://www.simplyrecipes.com/thmb/OCi18J2V8OeKDFV3FxoeKvgq74E=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-horiz-a-1600-7c8292daa98e4020b447f0dc97a45cb7.jpg',
      [new Ingredient('sweet potatoes',2),
                new Ingredient('tablespoons extra virgin olive oil', 3),
                new Ingredient('Kosher salt',1)]),
    new Recipe('Ultimate veggie burger',
      'These veggie burgers hit every satisfying, savory note with a hearty mix of pearl barley, chickpeas, ...',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F07%2F13%2FUltimate-Veggie-Burgers-FT-Recipe-0821.jpg',
      [new Ingredient('cups water',4),
                new Ingredient('cup uncooked pearl barley, rinsed',3/4),
                new Ingredient('pound fresh button mushrooms, stemmed and quartered',1),
                new Ingredient('teaspoon kosher salt, divided', 1+1/4)])
  ];*/
  private recipes: Recipe[] = [];
  constructor(private slService:ShoppingListService) {
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  addNewRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());

  }

  deleteRecipe(index: number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
