import { Component, OnInit } from '@angular/core';
import {EventEmitter, Output} from '@angular/core';
import {Employee} from 'app/shared/models/employee';

@Component({
  selector: 'employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
@Output() employeeCreated= new EventEmitter();

employee : Employee={
fname: '',
lname: '',
city:''
};
// or> employee: Employee = new Employee();

  constructor() { }

createemployee(){
  console.log('calling create employee');
    console.log(this.employee);
    this.employeeCreated.emit(this.employee);
   // this.employeeCreated.emit({employee : this.employee, dummydata: "super cool"})

   //resetting the form so that changes in form are not reflected to the table
   this.employee = {
     fname: '',
     lname: '',
     city:''   
   }
}

  ngOnInit() {
  }

}
