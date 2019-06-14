import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {

  greeting: string;

  counter = 100;

  constructor() { }

  ngOnInit() {
  }

  increase($event) {
    this.counter++;
  }

  decrease($event) {
    this.counter--;
  }

  showAlert($event) {
    alert('Kuku!!!');
  }

}
