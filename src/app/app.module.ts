import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpClientModule } from '@angular/common/http';

import { EmpployeeService } from './feature/employee/service/empployee.service';
import { EmployeeComponent } from './feature/employee/employee.component';

import { PanelMenuModule} from 'primeng/panelmenu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule} from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule} from 'primeng/inputnumber';
import { DialogModule} from 'primeng/dialog';
import { FileUploadModule} from 'primeng/fileupload';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule} from 'primeng/checkbox';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, BrowserAnimationsModule, HttpClientModule, ReactiveFormsModule,
    TableModule, ButtonModule, PanelMenuModule,
    ToastModule,ToolbarModule,InputTextModule,InputTextareaModule,InputNumberModule,DialogModule,
    FileUploadModule,ConfirmDialogModule,CalendarModule,CheckboxModule,
  ],
  providers: [EmpployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
