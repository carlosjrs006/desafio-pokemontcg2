import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateDeckComponent } from './pages/create-deck/create-deck.component';
import { ListDeckComponent } from './pages/list-deck/list-deck.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'criar-deck', component: CreateDeckComponent},
  { path: 'list-deck', component: ListDeckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
