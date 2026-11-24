import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signin } from './signin/signin';
import { Image } from './image/image';
import { Events } from './events/events';
import { FunctionCall } from './function-call/function-call';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Signin, Image, Events, FunctionCall],
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
