import { Component, QueryList, ViewChildren } from '@angular/core';
import { Categorie } from '../models/categorie';
import { Shortlist } from '../models/shortlist';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  categories : Categorie[]=[
    
    {"id":1,"title":"Grand électroménager",
    "image":"assets/images/categorie_electromenager.jpg", "description":"Grand électroménager",
    "available":true},
    {"id":2,"title":"Petit électroménager",
    "image":"assets/images/categorie_petit_electromenager.jpg", "description":"Petit électroménager",
    "available":true},
    {"id":3,"title":"Produits informatiques",
    "image":"assets/images/categorie_produits_informatiques.jpg", "description":"Produits informatiques",
    "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg",
    "description":"test", "available":true},
    {"id":5,"title":"TV, images et son",
    "image":"assets/images/categorie_tv_image_son.jpg", "description":"TV, images et son",
    "available":false},
    {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg",
    "description":"Produits voiture","available":false},
  ]

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
