import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseurl="http://localhost:3001/api/articles"

  constructor(private http:HttpClient) { }
  getallArticles():Observable<Products[]>{
    return this.http.get<Products[]>(this.baseurl)
  }
}
