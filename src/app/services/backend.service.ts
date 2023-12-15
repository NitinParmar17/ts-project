import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { UserDataTemplate } from '../MyComponents/user-list/UserDataTemplate ';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  url = "http://localhost:5000/api/abc"

  constructor(private http : HttpClient) { }

  getUserData () {
    return this.http.get<any>(this.url); 
  }

  // getUserData(): Observable<UserDataTemplate[]> {
  //   return this.http.get<UserDataTemplate[]>(this.url);
  // }
}
