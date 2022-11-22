import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  search = new BehaviorSubject('')

  constructor(private api: HttpClient) { }

  getAllUser() {
      return this.api.get('https://dummyjson.com/users')
  }
}
