import { Injectable, OnInit } from '@angular/core';
import { signedupUserUrl } from '../constants/api';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<any> {
    return this.http.post(signedupUserUrl, { user });
  }
}
