import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
/*Demo*/
import * as tm from './task-management/index';

/*Resuable Components*/
import { ListComponent } from './reusable_components/list/list.component';
import { NgMatDialogComponent } from './reusable_components/angular-material-dialog/ng-mat-dialog.component';
import { DynamicFormModule } from './reusable_modules/dynamic-form/dynamic-form.module';


import { AppRouting } from './app.routing';
import { AuthGuard } from './guards/auth.guard';
import { httpInterceptorProviders } from './http-interceptors/index';
import { CommonService } from './service/common.service';
import { LoginResolver } from './guards/login.resolve';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ...tm.TASK_MANAGEMENT,
    ListComponent,
    NgMatDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouting,
    MaterialModule,
    DynamicFormModule,
  ],
  providers: [
    httpInterceptorProviders,
    AuthGuard,
    CommonService,
    LoginResolver
  ],
  bootstrap: [AppComponent],
  entryComponents: [NgMatDialogComponent, tm.TASK_MANAGEMENT_OBJ.TaskManagementFormComponent]
})
export class AppModule { }
