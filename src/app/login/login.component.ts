import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { CommonService } from '../service/common.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent{
    @ViewChild('f') loginForm : NgForm;
    loading : boolean = false;

    constructor(
        private router: Router,
        private http : HttpClient,
        private commonService : CommonService
        ) { }
    // Call on login click
    login() {
        // Set loading true
        this.loading = true;
        // Hit login api
        this.http.post('/usermanagement/login',this.loginForm.value).subscribe((data: any)=>{
            // Set loading false
            this.loading = false;
            // Store auth-token in localstorage
            localStorage['auth-token'] = data.token;
            // Navigate to home page
            this.router.navigate(['']);
          },data => {
            // Set loading false
            this.loading = false;
            // Show error notification
            this.commonService.showNotification({
                message : data.error && data.error.message,
                type : 'error'
            })
        })
    }
}