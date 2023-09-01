import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  products: Products[] = [];
  constructor(public productsService: ProductsService) { }
  ngOnInit(): void {
    this.productsService.getallArticles().subscribe((data: Products[])=>{
    this.products = data;
    console.log(this.products);
    })
    }
    delarticle(id:any){
      this.productsService.deleteArticle(id).subscribe(res => {
        this.products = this.products.filter(item => item._id !==id);

})
}
}
