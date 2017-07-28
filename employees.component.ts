import { Component, OnInit } from '@angular/core';

interface Employee{
  fname: string;
  lname: string;
  city: string;
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {

//array of employees
EmployeesList : Employee[] = [{
  fname : "jerald",
  lname : 'siby',
  city: 'cbr'
},
{
  fname : "milan",
  lname : 'kumar',
  city: 'tvm'
},
{
  fname : "vishnu",
  lname : 'RS',
  city: 'kochi'
}
];

dummyemployee= {
  fname: "jer",
  lname:"siby",
  city: "tvm"

};

project = {
active : 'high'
};
activeEmployee;
  constructor() { }

  ngOnInit() {
  }
  setActivemEployee(employee){
    console.log('event handler called');
    this.activeEmployee= employee;
  }
  handleemployeecreation(eventinfo){
    console.log('event handled');
     console.log(eventinfo);
     //this.activeEmployee = eventinfo;
     this.EmployeesList.push(eventinfo);    
  }
}
