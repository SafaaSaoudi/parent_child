import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { CategorieService } from '../core/categorie.service';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
  //providers:[CategorieService]
})
export class ProductCategoryComponent {
constructor(private actr:ActivatedRoute){}
id!: Number ;
categorie!:string;
desc!:string;
productsByCatrgorie! :Product[];
listProducts :   Product[]=[]

//category= this.cateServ.getCategoryById(1);

ngOnInit(){
  
  //snapshot
  this.id=Number(this.actr.snapshot.params["id"])
  //this.id=Number(this.actr.snapshot.paramMap.get('id'))
  //Observable
  this.actr.paramMap.subscribe(params =>this.id=Number (params.get('id')))
  this.actr.queryParamMap.subscribe(params =>this.categorie=String (params.get('name')))
  //Optionel:
  this.categorie=String(this.actr.snapshot.queryParamMap.get('name'))
  //this.desc=String(this.actr.snapshot.queryParamMap.get('desc'))
  //this.actr.queryParamMap.subscribe(params =>this.categorie=String (params.get('name')))

  this.productsByCatrgorie= this.listProducts.filter(p=>p.categoryId == this.id);
 // console.log(this.id)
  //console.log(this.productsByCatrgorie.length)
 // console.log(this.categorie)

 //this.category!.description= " hello from product category";
}

  
}
