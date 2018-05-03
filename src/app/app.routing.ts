import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoginResolver } from './guards/login.resolve';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import * as tm  from './task-management/index';
let routes : Routes = [
	{path : '', component : HomeComponent, canActivate : [AuthGuard], children : [
		{path : '', component : tm.TASK_MANAGEMENT_OBJ.TaskManagementComponent}
	]},
	{path : 'login', component : LoginComponent, resolve : {loginResolver : LoginResolver}},
	{path : '**', redirectTo : '' }
]
@NgModule({
	imports : [RouterModule.forRoot(routes, {useHash:true})],
	exports : [RouterModule]
})
export class AppRouting {

}