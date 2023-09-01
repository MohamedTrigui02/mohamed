import { Scategories } from './scategories';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScategoriesService {
  private baseurl="http://localhost:3001/api/Scategories/"

  constructor(private http:HttpClient) { }
  getallScategories():Observable<Scategories[]>{
    return this.http.get<Scategories[]>(this.baseurl)
  }

  createCategorie(scategorie:Scategories):Observable<Scategories>{
    return this.http.post(this.baseurl,scategorie)
      }
      deleteCategorie(id:object){
        return this.http.delete(this.baseurl+id)
      }
    getCategorie(id:object):Observable<Scategories>{
      return this.http.get(this.baseurl+id)

    }
    updateCategorie(_id:object, Scategories:Scategories): Observable<any> {

      return this.http.put(this.baseurl + _id,Scategories)

      }


}
