import { Component, OnInit } from '@angular/core';
import {CompteService} from '../../controller/service/compte.service';
import {Compte} from '../../controller/model/compte.model';

@Component({
  selector: 'app-compte-list',
  templateUrl: './compte-list.component.html',
  styleUrls: ['./compte-list.component.css']
})
export class CompteListComponent implements OnInit {

  constructor(private compteService: CompteService) { }

  ngOnInit(): void {
    this.compteService.findAll();
  }
  get comptes(): Array<Compte> {
    return this.compteService.comptes;
  }
  public delete(rib: string, i: number) {
    this.compteService.delete(rib, i);
  }

  public update(compte: Compte, i: number) {
    this.compteService.compte = this.clone(compte);
  }

  private clone(compte: Compte) {
    const myClone = new Compte();
    myClone.rib = compte.rib;
    myClone.sold = compte.sold;
    return myClone;
  }
}
