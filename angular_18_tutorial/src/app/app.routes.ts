import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AttributeDirectiveComponent } from './directive/attribute-directive/attribute-directive.component';
import { StructuralDirComponent } from './directive/structural-dir/structural-dir.component';

export const routes: Routes = [

   {
     path: 'data-binding',
    component: DataBindingComponent
   },
   {
    path:'add-employee',
    component:AddEmployeeComponent
   },
   {
    path:'employee-list',
    component:EmployeeListComponent
   },
   {path:'attribute-directive',
    component:AttributeDirectiveComponent

   },
   {
    path:'structural-directive',
    component:StructuralDirComponent
   }

];
