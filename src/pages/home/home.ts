import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name1 = "";
  name2 = "";

  get score(){
    const letters = (this.name1 + this.name2).toLowerCase();
    let sum = 0;
    for (let index = 0; index < letters.length; index++) {
      sum += letters.charCodeAt(index);
    }

    return sum % 101;
  }
}
