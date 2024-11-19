import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategorieService } from '../core/categorie.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent {

constructor(private categServ: CategorieService){}

  showForm(f: NgForm){
  console.log(f);
  this.categServ.addCategorie(f.value);
  //add dans list categories
}
}
