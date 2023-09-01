import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private baseurl="http://localhost:3001/api/categories/"

  constructor(private http:HttpClient) { }
  getallCategories():Observable<Categories[]>{
    return this.http.get<Categories[]>(this.baseurl)
  }

  createCategorie(categorie:Categories):Observable<Categories>{
    return this.http.post(this.baseurl,categorie)
      }
      deleteCategorie(id:object){
        return this.http.delete(this.baseurl+id)
      }
    getCategorie(id:object):Observable<Categories>{
      return this.http.get(this.baseurl+id)

    }
    updateCategorie(_id:object, Categories:Categories): Observable<any> {

      return this.http.put(this.baseurl + _id,Categories)

      }


}
