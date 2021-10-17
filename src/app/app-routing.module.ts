import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from  './settings/settings.component';
import { LogoutComponent } from './logout/logout.component';
const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'home', component:HomeComponent},
  { path:'peopleList', component:PeopleListComponent},
  { path:'profile', component:ProfileComponent},
  { path:'setting', component:SettingsComponent},
  { path:'logout', component:LogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
