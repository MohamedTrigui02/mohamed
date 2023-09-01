import { CategoriesService } from '../categories.service';
import { Categories } from './../categories';
import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  categories: Categories[] = [];
  constructor(public categoriesService: CategoriesService) { }
  ngOnInit(): void {
    this.categoriesService.getallCategories().subscribe((data: Categories[])=>{
    this.categories = data;
    console.log(this.categories);
    })
    }
    delcategorie(id:any){
      this.categoriesService.deleteCategorie(id).subscribe(res => {
        this.categories = this.categories.filter(item => item._id !==id);

})
}

}
