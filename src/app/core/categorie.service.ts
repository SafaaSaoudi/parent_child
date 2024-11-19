import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root' //visiblity tout le projet (composants et modules)
})


export class CategorieService {
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

  constructor() { }

  getAllCategories(){
    return this.categories;
  }
  getCategoryById(id:number){
    return this.categories.find(e=>e.id==id);
  }

  addCategorie(categorie:Categorie){
    this.categories.push(categorie);
  }

  deleteCategorie(id:number){
    this.categories=this.categories.filter(e=>e.id!=id);
  }

  updateCategorie(categorie:Categorie){
    let index=this.categories.findIndex(e=>e.id==categorie.id);
    this.categories[index]=categorie;
  }
}
