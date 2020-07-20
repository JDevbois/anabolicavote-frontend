import { User } from './../_models/user.model';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {
  user$: any;

  constructor(private dataService: DataService) { }

  registerInit(): Observable<Object> {
    return this.dataService.registerInit();
  }

  login(username: string, password: string): Observable<Object> {
    const user = new User(username, password);
    return this.dataService.loginUser(user);
  }
}
