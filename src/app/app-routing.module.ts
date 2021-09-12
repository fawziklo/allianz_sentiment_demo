import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientReviewComponent } from './client-review/client-review.component';


const routes: Routes = [
  {
    path: 'sentiment',
    component: ClientReviewComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'sentiment'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
