import { UserslistComponent } from './../userslist/userslist.component';
import { UsersComponent } from './../users/users.component';
import { Test2Component } from './../test2/test2.component';
import { Test1Component } from './../test1/test1.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },
  // { path: 'users', component: UserslistComponent },
  { path: 'user/:id', component: UsersComponent },
  { path: '**', redirectTo: 'test1' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
