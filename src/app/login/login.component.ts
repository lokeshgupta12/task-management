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

    login() {
        this.loading = true;
        this.http.post('/usermanagement/login',this.loginForm.value).subscribe((data: any)=>{
            this.loading = false;
            localStorage['auth-token'] = data.token;
            this.router.navigate(['']);
          },data => {
            this.loading = false;
            this.commonService.showNotification({
                message : data.error && data.error.message,
                type : 'error'
            })
        })
    }
}