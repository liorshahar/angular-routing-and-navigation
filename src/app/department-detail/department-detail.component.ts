import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
@Component({
  selector: "app-department-detail",
  template: `
    <h3>You choose department: {{ departmentId }}</h3>
    <nav>
      <a (click)="goPrevios()">Previous</a>
      <a (click)="goNext()">Next</a>
    </nav>

    <div>
      <a (click)="goBack()">Back</a>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get("id"));
      this.departmentId = id;
    });
  }

  goPrevios() {
    if (this.departmentId > 0) {
      let prevId = this.departmentId - 1;
      this.router.navigate(["/departments", prevId]);
    }
  }

  goNext() {
    if (this.departmentId < 5) {
      let nextId = this.departmentId + 1;
      this.router.navigate(["/departments", nextId]);
    }
  }

  goBack() {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(["/departments", { id: selectedId }]);
  }
}
