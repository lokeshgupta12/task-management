import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

const snackBarDefaultConfig = {
	message : "xxxxxxxxxxxx",
	action : "close",
	duration : 2000,
	type : 'success'
};

@Injectable()
export class CommonService {
	constructor(
		private snackBar : MatSnackBar,
		private router : Router
		){}

	// Get auth token from localstorage
    getAuthToken = () => localStorage['auth-token'] || '';
    // Check given value is object ot not
    isObject = (value) => value !== null && typeof value === 'object';
    // Show notifications
    showNotification = (obj:{} = {}) => {
    	var config = Object.assign({}, snackBarDefaultConfig, obj);
    	this.snackBar.open(config.message, config.action,{
	      duration: config.duration,
	      extraClasses : [config.type]
	    });
    }
    // Check Server response error
    checkError = (err) => {
    	if (this.isObject(err) && (err.status === 401)) {
    		localStorage.removeItem('auth-token');
    		this.router.navigate(['/login']);
    	}
    }
}