import { Component, OnInit } from '@angular/core';

const metaData={
selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imgUrl: 'http://lorempixel.com/400/200/sports/1/'
};

@Component(metaData)

export class HomeComponent implements OnInit {
imageUrl = 'http://lorempixel.com/400/200/sports/1/';
  constructor() { }

  ngOnInit() {    
  }

}
