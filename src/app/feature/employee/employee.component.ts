import { Component, OnInit } from '@angular/core';
import { IEmployee } from './interface/iemployee';
import { EmpployeeService } from './service/empployee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employeeList:IEmployee[]=[]; 
  first = 0;
  rows = 5;

  constructor(private employeeService: EmpployeeService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.employeeService.getAll().subscribe(data=>{
      this.employeeList = data;
    });
  } 
}
