import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //visiblity tout le projet (composants et modules)
})


export class CategorieService {
  
  categories : Categorie[]=[]
  URL = 'http://localhost:3000/categories';
  constructor( private http: HttpClient) { }

  getAllCategories(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.URL);
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
