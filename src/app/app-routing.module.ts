import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepartmentListComponent } from "./department-list/department-list.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { DepartmentDetailComponent } from "./department-detail/department-detail.component";
// Each rout is an object {}
// routes is type of Routes
const routes: Routes = [
  { path: "", redirectTo: "/departments", pathMatch: "full" }, // default rout // full -> URL is empty
  { path: "departments", component: DepartmentListComponent },
  { path: "departments/:id", component: DepartmentDetailComponent },
  { path: "employees", component: EmployeeListComponent },
  { path: "**", component: PageNotFoundComponent } // wildcard path -> need to be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  DepartmentListComponent,
  EmployeeListComponent,
  PageNotFoundComponent,
  DepartmentDetailComponent
];
