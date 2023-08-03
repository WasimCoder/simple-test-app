import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IPInterface} from '../interfaces/interfaces'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private http: HttpClient) { }
  getIpData(ip:string):Observable<IPInterface>{
    return this.http.get<IPInterface>('http://ip-api.com/json/'+ip+'?fields=66838527')
  }
}
