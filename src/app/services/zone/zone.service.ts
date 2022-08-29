import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Izone } from 'src/app/model/Izone/izone';

@Injectable({
  providedIn: 'root'
})
export class ZonesService {
url="http://127.0.0.1:8001/api/zones/"
url1="http://127.0.0.1:8001/api/zones"


  constructor(public http:HttpClient) {

  }

  getZones():Observable<Izone[]> {
   return this.http.get<Izone[]>(this.url1);
  }

  detailgetZones(id:number):Observable<any> {
   return this.http.get<any>(this.url+id+'/'+'commandes');
  }

}
