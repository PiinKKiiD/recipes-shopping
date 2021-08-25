import {Injectable } from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Recipe} from "../recipes/recipe.model";
import {RecipeService} from "../recipes/recipe.service";
import {exhaustMap, map, take, tap} from 'rxjs/operators';
import {AuthService} from "../auth/auth.service";
@Injectable({
  providedIn:'root'
})
export class DataStorageService{
  private dataStoragePath: string = 'https://recipe-shonppinglist-default-rtdb.asia-southeast1.firebasedatabase.app/';
  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }
  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.http.put(
      this.dataStoragePath+'recipes.json',
      recipes
    ).subscribe(response =>{console.log(response)});
  }

  updateDataLocal(recipes){
    this.recipeService.setRecipes(recipes);
  }

  fetchRecipes(){
    console.log('geting data');
        return this.http.get<Recipe[]>(
          this.dataStoragePath+'recipes.json',
          )
          .pipe(
            map(recipes =>{
              return recipes.map(recipe => {
                return {
                  ...recipe,
                  ingredients: recipe.ingredients? recipe.ingredients: []
                };
              });
            }),
            tap(recipes=>{
              this.recipeService.setRecipes(recipes);
            })
          );
  }
}
