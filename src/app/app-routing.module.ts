import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const approutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  //{path:'auth',component:AuthComponent},
  {
    path: 'recipes',
    loadChildren: () =>
      import('./recipes/recipes.module').then((m) => m.RecipesModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
  },{
    path: 'shopping-list',
    loadChildren: () =>
      import('./shopping-list/shopping-list.module').then((m) => m.ShoppingListModule),
  },
  //loadChildren : './recipes/recipes.module#RecipesModule'
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(approutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
