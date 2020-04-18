import { Component, OnInit } from '@angular/core';
import {Compte} from '../../controller/model/compte.model';
import {CompteService} from '../../controller/service/compte.service';

@Component({
  selector: 'app-compte-create',
  templateUrl: './compte-create.component.html',
  styleUrls: ['./compte-create.component.css']
})
export class CompteCreateComponent implements OnInit {
  constructor(private compteService: CompteService) { }
  ngOnInit(): void {
  }
  get compte(): Compte {
    return this.compteService.compte;
  }
  get comptes(): Array<Compte> {
    return this.compteService.comptes;
  }
  public save(){
    this.compteService.save();
  }
}
