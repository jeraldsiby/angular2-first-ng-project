import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  //templateUrl: './test.component.html',
  template: `<h1>this is the first line(inline)</h1>
  <h3>this is the second line (inline)</h3>`,
  styles: ['h1,h3 {color: green}']
                   
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
