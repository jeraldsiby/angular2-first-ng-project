import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  //templateUrl: './about.component.html',
  template: "This is the inline component",
  styles: [
    `h4 {color: green}    
    `
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
