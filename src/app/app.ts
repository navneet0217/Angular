import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signin } from './signin/signin';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Signin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tutorial');
  name = "Angular Tutorial"
  userName = "Navneet0212"
  count = 3
  isAdmin = true
  mytitle = signal("Angular tutorial")
  getUsers() {
    return "Mohit Kumar"
  }
}
