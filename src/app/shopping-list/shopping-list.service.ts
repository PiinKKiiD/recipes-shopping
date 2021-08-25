import { EventEmitter } from '@angular/core'
import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  startedEditing= new Subject<number>();

  getIngredient(index: number){
    return this.ingredients[index];
  }

  private ingredients: Ingredient[] = [
    new Ingredient("Apples",5),
    new Ingredient("Tomato", 10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    /*for (let ingredient of ingredients){
      this.addIngredient(ingredient);
    }*/
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIng: Ingredient){
    this.ingredients[index]= newIng;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());

  }
}
