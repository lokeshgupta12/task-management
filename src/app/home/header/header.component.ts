import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	// Remove auth-token from local storage
	logout() {
		localStorage.removeItem('auth-token');
	}	
}
