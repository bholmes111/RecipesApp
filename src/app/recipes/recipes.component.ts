import { Component, OnInit } from '@angular/core';
//import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
//import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
 // selectedRecipe: Recipe;

  // constructor(private recipeService: RecipeService,
  //   private router: Router,
  //   private route: ActivatedRoute) { }

  ngOnInit() {
    // this.recipeService.recipeSelected
    // .subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe;
    //   }
    // )
  }
}
