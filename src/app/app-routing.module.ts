import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { GuardGuard } from './common/guard.guard';

const routes: Routes = [
  {path:"", redirectTo: "login", pathMatch:"full"},
  {path:"login", component:LoginComponent, pathMatch:"full"},
  {path:"Dashboard", component:DashboardComponent, pathMatch:"full", canActivate:[GuardGuard]},
  {path:"**", component:PageNotFoundComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
