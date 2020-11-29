import { Component, OnInit } from '@angular/core';
import { CriteriasService } from '../services/criterias.service';
import {Criteria} from '../criteria';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  formula:string;
  criteria:Criteria = new Criteria();
  receivedCriteria:Criteria;

  criterias:Criteria[];
  constructor(private _crit:CriteriasService) { }

  ngOnInit(): void {   
    this._crit.getCriterias().subscribe((data: Criteria[]) => {
      this.criterias = data; 
    });  
    
    this._crit.getFormula().subscribe((data: Object) => {
      this.formula = data["value"];   
    });
  }

  addCriteria(criteria:Criteria):void{
    this.criteria.isEnabled = true;
    
    this._crit.createCriteria(criteria).subscribe(
                    (data: Criteria) => {this.receivedCriteria=data},
                    error => console.log(error),
                );

    this.updateCriterias();
  }

  updateCriterias():void{
      this.criterias.push(this.criteria);
  }

  sendFormula(){
    
  }

}
