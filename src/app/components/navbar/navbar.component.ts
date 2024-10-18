import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false; // For managing the visibility of the menu (if you have a menu)
  isLoginVisible = false; // For managing the visibility of the login form
  isSignupVisible = false; // For managing the visibility of the signup form

  // Toggles the menu visibility
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Toggles the login form visibility
  toggleLoginForm() {
    this.isLoginVisible = !this.isLoginVisible;
    this.isSignupVisible = false; // Hide signup form when login form is toggled
  }

  // Toggles the signup form visibility
  toggleSignupForm() {
    this.isSignupVisible = !this.isSignupVisible;
    this.isLoginVisible = false; // Hide login form when signup form is toggled
  }

  // Optional: Handle the login logic
  onLogin() {
    // Add your login logic here, e.g., call an authentication service
    console.log('Logging in with the entered credentials...');
  }

  // Optional: Handle the signup logic
  onSignup() {
    // Add your signup logic here, e.g., call a registration service
    console.log('Signing up with the entered credentials...');
  }
}
