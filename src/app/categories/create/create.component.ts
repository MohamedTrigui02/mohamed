import { Component } from '@angular/core';
import { Categories } from '../categories';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
categories:Categories=new Categories()
display="none";

constructor(private catserv:CategoriesService ){}

openModal() {
  this.display = "block";
  }
  closeModal() {
  this.display = "none";
  }

  ajoutcategorie=()=>{
    this.catserv.createCategorie(this.categories).subscribe((data=>{
     this.closeModal()
    window.location.reload();
    }))


}}
