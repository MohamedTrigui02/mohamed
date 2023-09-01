import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseurl="http://localhost:3001/api/articles/"

  
  constructor(private http:HttpClient) { }
  getallArticles():Observable<Products[]>{
    return this.http.get<Products[]>(this.baseurl)
  }

  createArticle(product:Products):Observable<Products>{
return this.http.post(this.baseurl,product)
  }


  deleteArticle(id:object){
    return this.http.delete(this.baseurl+id)
  }


getarticle(id:object):Observable<Products>{
  return this.http.get(this.baseurl+id)

}


updatearticle(_id:object, products:Products): Observable<any> {

  return this.http.put(this.baseurl + _id,products)

  }


}
