import { Component } from '@angular/core';

@Component({
  selector: 'app-function-call',
  imports: [],
  templateUrl: './function-call.html',
  styleUrl: './function-call.css',
})
export class FunctionCall {

  count = 0

  handleClick() {
    let xyz = "Hi Hello"
    console.log("Button Clicked", xyz)
    this.helloWorld()
  }
  helloWorld() {
    console.log("Hello World")
  }
}
