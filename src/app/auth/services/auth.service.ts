import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CurrentUSerInterface } from 'src/app/shared/types/currentUser.interface';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { environment } from 'src/environments/environment';
import { AuthResponceInterface } from '../types/authResponse.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponceInterface): CurrentUSerInterface {
    return response.user;
  }

  register(data: RegisterRequestInterface): Observable<CurrentUSerInterface> {
    const url = environment.apiUrl + '/users';

    return this.http
      .post<AuthResponceInterface>(url, data)
      .pipe(map(this.getUser));
  }

  login(data: LoginRequestInterface): Observable<CurrentUSerInterface> {
    const url = environment.apiUrl + '/users/login';

    return this.http
      .post<AuthResponceInterface>(url, data)
      .pipe(map(this.getUser));
  }
}
