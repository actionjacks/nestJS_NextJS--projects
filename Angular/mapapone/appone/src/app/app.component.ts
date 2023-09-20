import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-custom-app';

  tasks = ['lorem-1', 'lorem-2', 'lorem-3', 'lorem-4'];

  myObject = {
    name: 'jackkkkkkkkkkkk',
    age: 30,
  };

  add_method(fo: HTMLInputElement) {
    console.log(fo.value);
  }

  some_method() {
    console.log('fo-baar');
  }
}

class SomeClass {
  constructor() {}
}
