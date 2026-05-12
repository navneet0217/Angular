import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
// import { EmployeeListComponent } from './components/employee-list/employee-list.component';
// import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { StructuralDirComponent } from "./directive/structural-dir/structural-dir.component";
import { AttributeDirectiveComponent } from "./directive/attribute-directive/attribute-directive.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StructuralDirComponent, AttributeDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tutorial';
}
