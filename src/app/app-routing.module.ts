import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/home', redirectTo: '/main', pathMatch: 'full'},
  { path: '**', redirectTo: '/main', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
