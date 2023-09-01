import { ScategoriesService } from './../../scategories/scategories.service';
import { Scategories } from 'src/app/scategories/scategories';
import { Products } from './../products';
import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
products:Products=new Products()
scategorie:Scategories[]=[]
  display = "none";
constructor(private scatserv:ScategoriesService,private prserv:ProductsService){}
ngOnInit(): void {
  this.scatserv.getallScategories().subscribe((data: Scategories[])=>{
  this.scategorie = data;
  })}

openModal() {
this.display = "block";
}
closeModal() {
this.display = "none";
}
//methode ajout article

ajoutarticle=()=>{
  this.prserv.createArticle(this.products).subscribe((data=>{
   this.closeModal()
  window.location.reload();
  }))
  }

}
