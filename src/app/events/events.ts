import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  count = 0
  counts = signal(0)

  increment() {
    this.count++;
  }

  increaseCounter() {
    this.counts.update((counts) => counts + 1)
  }
  decrement() {
    this.count--;
  }

  showEvents(e: any) {
    console.log(e)
  }

  userName = ""
  updateUser(value: string) {
    this.userName = value
  }



  formSubmit(e: any) {
    e.preventDefault()
    console.log("Form Submitted")
  }
}
