import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   readonly docker = 'docker';
   readonly iis_express = 'iis_express'; 
   readonly iis = 'iis'; 
   readonly cloud = 'cloud';

  constructor(private http : HttpClient) { }

  get<T>(path: string){
    return this.http.get<T>(this.getBase() + path);
  }

  private getBase(){
    switch(environment.apiRunType)
    {    
      case this.docker:
        return environment.dockerBaseUrl;
      case this.iis:
        return environment.iisBaseUrl;
      case this.iis_express:
        return environment.iisExpressBaseUrl;
        case this.cloud:
          return environment.cloudBaseUrl;
      default:
        return this.iis_express;
    }
  }

}
