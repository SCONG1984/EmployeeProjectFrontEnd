import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../interface/iemployee';
import { ApiService } from 'src/app/core/api.service';

@Injectable({
  providedIn: 'root'
})
export class EmpployeeService {

  constructor(private apiService: ApiService) 
  {
    
  }

   getAll() : Observable<IEmployee[]> {
    const data = this.apiService.get<IEmployee[]>('/employee');
    return data;
  }  
}