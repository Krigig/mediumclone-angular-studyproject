import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CurrentUSerInterface } from 'src/app/shared/types/currentUser.interface';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { environment } from 'src/environments/environment';
import { AuthResponceInterface } from '../types/authResponse.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  register(data: RegisterRequestInterface): Observable<CurrentUSerInterface> {
    const url = environment.apiUrl + '/users';

    return this.http
      .post<AuthResponceInterface>(url, data)
      .pipe(map((response: AuthResponceInterface) => response.user));
  }
}
