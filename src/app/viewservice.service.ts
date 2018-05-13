import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class ViewserviceService {


  constructor(private http:HttpClient) { 

   
  }
private baseUrl="https://anapioficeandfire.com/api/";
private handleError(err: HttpErrorResponse){
  return Observable.throw(err.message)
}
  getAllData(type){
    let data = this.http.get(this.baseUrl+type);
    return data;

  }

getSingleInfo(type,search){
let numbi = Number(type)
let index = numbi +1 ;
console.log(search,'jhdcvshjdcjhsdh')
  let singleData = this.http.get(this.baseUrl+search+"/"+index);
  return singleData;

}

}
