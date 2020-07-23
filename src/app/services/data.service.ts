import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

const URL = 'http://localhost:3000/api/data'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(
    private http: HttpClient
  ) { }

  create(data) {
    return this.http.post(URL,data)
  }
}
