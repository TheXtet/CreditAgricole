import { Component, OnInit } from '@angular/core';
import { CriteriasService } from '../services/criterias.service';
import { Criteria } from '../criteria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  formula: string;
  criteria: Criteria = new Criteria();
  receivedCriteria: Criteria;

  criterias: Criteria[];
  constructor(private _crit: CriteriasService, private router: Router) { }

  ngOnInit(): void {
    this._crit.getCriterias().subscribe((data: Criteria[]) => {
      this.criterias = data;
    });

    this._crit.getFormula().subscribe((data: string) => {
      this.formula = data["value"];
    })
  }

  addCriteria(criteria: Criteria): void {
    this.criteria.isEnabled = true;

    this._crit.createCriteria(criteria).subscribe(
      (data: Criteria) => { this.receivedCriteria = data },
      error => console.log(error),
    );

    this.updateCriterias();
  }

  updateCriterias(): void {
    this.criterias.push(this.criteria);
  }

  updateCriteria(crit: Criteria) {
    crit.isEnabled = !crit.isEnabled;
    if (!crit.isEnabled) {
      this._crit.disableCriteria(crit).subscribe((data: Criteria) => { crit = data },
        error => console.log(error),
      );
    }
    else{
      this._crit.enableCriteria(crit).subscribe((data: Criteria) => {
        crit = data});
    }
  }

  sendFormula() {
    this._crit.sendFormula(this.formula).subscribe(
      (data: string) => { this.formula = data },
      error => console.log(error),
    );
    location.reload();
    this.router.navigate(['/adminPanel']);
  }

}
