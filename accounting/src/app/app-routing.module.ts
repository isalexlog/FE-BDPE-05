import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {UserFormComponent} from './components/user-form/user-form.component';
import {Placeholder} from '@angular/compiler/src/i18n/i18n_ast';
import {PlaceholderComponent} from './components/placeholder/placeholder.component';
import {SignupComponent} from './layouts/signup/signup.component';
import {EditUserComponent} from './layouts/edit-user/edit-user.component';
import {UsersComponent} from './layouts/users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'iddqd', component: PlaceholderComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'users-layout', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
