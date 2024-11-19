import { Component, QueryList, ViewChildren } from '@angular/core';
import { Categorie } from '../models/categorie';
import { Shortlist } from '../models/shortlist';
import { CardComponent } from '../card/card.component';
import { CategorieService } from '../core/categorie.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
 
  constructor(private catServ: CategorieService){}

  categories: Categorie[] = this.catServ.getAllCategories();
  
  shorList: Shortlist[]=[];
  titre='';

  @ViewChildren( CardComponent) cardList!: QueryList<CardComponent>;

  ngAfterViewInit(){

    //console.log(this.cardList);
    this.cardList.forEach((card)=>{
      let data = this.categories.find(e=>e.id==card.id);
      if (data?.available== false){
        card.btnText='Indisponible';
        card.isAvailable=false;}
      else
        {card.btnText='Voir Produits';
        card.isAvailable=true;}
        
        
      });
  
    
  }




showDesc(x:string){
  alert(x);
}

addToShortList(data:any){

  if (this.shorList.find(e=>e.idElement==data.idElement && e.idUser==data.idUser)){
    alert('Element deja dans shortList');
  }
else{
  this.shorList.push({id:1,idUser:data.idUser,idElement:data.idElement,typeElement:'categorie'});}
console.log(this.shorList);

}

}
