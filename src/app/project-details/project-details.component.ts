import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router"
import { NgFor, NgIf } from '@angular/common';
import { AppConstants } from '../constants/app.constants';

@Component({
  selector: 'app-project-details',
  imports: [NgIf, NgFor],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
  providers: [AppConstants]
})
export class ProjectDetailsComponent {

  public project: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private constants: AppConstants) { }

  ngOnInit() {
    this.getProject();
    if (!this.project) {
      this.router.navigate(['/'])
    }
  }

  getProject(){
    const id = this.route.snapshot.paramMap.get('id');
    if (Number.isInteger(Number(id))) {
      for (var i = 0; i < this.constants.PROJECTS.length; i++) {
        if (this.constants.PROJECTS[i].ProjectId == Number(id)) {
          this.project = this.constants.PROJECTS[i];
          break;
        }
      }
    }
  }
}
