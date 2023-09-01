import { Component } from '@angular/core';
import { Scategories } from '../scategories';
import { ScategoriesService } from '../scategories.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  scategories:Scategories=new Scategories()
  display="none";

  constructor(private scatserv:ScategoriesService ){}

  openModal() {
    this.display = "block";
    }
    closeModal() {
    this.display = "none";
    }

    ajoutscategorie=()=>{
      this.scatserv.createCategorie(this.scategories).subscribe((data=>{
       this.closeModal()
      window.location.reload();
      }))


}}
