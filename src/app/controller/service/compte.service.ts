import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Compte} from '../model/compte.model';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private baseUrl = 'http://localhost:8090/api/comptes';
  private _compte = new Compte();
  private _comptes = Array<Compte>();

  constructor(private http: HttpClient) { }

  public save(){
    this.http.post<number>(this.baseUrl + '/', this.compte).subscribe(data => {
      if (data > 0) {
        this.comptes.push(this.compte);
        this.compte = null;
      } else {
        console.log('Erreur de enregistrement :' + data);
      }
    });
  }

  public findAll() {
    this.http.get<Array<Compte>>(this.baseUrl + '/').subscribe(data => {
      this.comptes = data;
    });
  }

  public delete(rib: string, i: number) {
    if (confirm('Voulez-vous vraimenet faire?')) {
      this.http.delete<number>(this.baseUrl + '/rib/' + rib).subscribe(data => {
        if (data > 0) {
          this.comptes.splice(i, data);
        }
      });
    }
  }

  get compte(): Compte {
    if (this._compte == null ) {
      this._compte = new Compte();
    }
    return this._compte;
  }

  set compte(value: Compte) {
    this._compte = value;
  }


  get comptes(): Array<Compte> {
    if (this._comptes == null) {
      this._comptes = new Array<Compte>();
    }
    return this._comptes;
  }

  set comptes(value: Array<Compte>) {
    this._comptes = value;
  }
}
