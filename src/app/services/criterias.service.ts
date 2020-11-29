import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Criteria } from '../criteria';
@Injectable({
  providedIn: 'root'
})
export class CriteriasService {
  constructor(private http: HttpClient) {

  }

  getCriterias(){
    return this.http.get('https://agricoleapi.azurewebsites.net/api/Criterias');
  }

  createCriteria(criteria:Criteria){
    return this.http.post<Criteria>('https://agricoleapi.azurewebsites.net/api/Criterias', criteria);
  }

  getFormula(){
    return this.http.get('https://agricoleapi.azurewebsites.net/api/formula');
  }
}
