import { ViandeComponent } from './pages/viande/viande.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VolaillesComponent } from './pages/volailles/volailles.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { ProduitsComponent } from './pages/produits/produits.component';

const routes: Routes = [
 
 
 
  { path: 'produit', component: ProduitsComponent },
  { path: '', redirectTo: '/produit', pathMatch: 'full' },
  { path: 'volailles', component: VolaillesComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'viande', component: ViandeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
