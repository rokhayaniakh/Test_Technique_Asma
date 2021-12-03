import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailAuteurComponent } from './detail-auteur/detail-auteur.component';
import { DetailPostComponent } from './detail-post/detail-post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'accueil',
    pathMatch:'full',
  },
  { path: 'accueil', component: AccueilComponent},
  { path: 'posts/:id', component: DetailPostComponent}, 
  { path: 'detail_auteur', component: DetailAuteurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
