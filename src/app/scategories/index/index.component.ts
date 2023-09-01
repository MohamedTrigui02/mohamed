import { Component } from '@angular/core';
import { ScategoriesService } from '../scategories.service';
import { Scategories } from './../scategories';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  Scategories: Scategories[] = [];
  constructor(public scategoriesService: ScategoriesService) { }
  ngOnInit(): void {
    this.scategoriesService.getallScategories().subscribe((data: Scategories[])=>{
    this.Scategories = data;
    console.log(this.Scategories);
    })
    }

    delscategorie(id:any){
      this.scategoriesService.deleteCategorie(id).subscribe(res => {
        this.Scategories = this.Scategories.filter(item => item._id !==id);

})
}


}
