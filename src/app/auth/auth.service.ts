import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new Subject<User>();

  API_KEY = 'AIzaSyDI4-YaZSdVUB9_QbquxlwR4bV2_OoWELs';
  frbsSignUpApiURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`;
  frbsSignInApiURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`;

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.frbsSignUpApiURL, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((response) => {
          this.handleAuthetication(
            response.email,
            response.localId,
            response.refreshToken,
            response.expiresIn
          );
        })
      );
  }
  signin(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.frbsSignInApiURL, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((response) => {
          this.handleAuthetication(
            response.email,
            response.localId,
            response.refreshToken,
            response.expiresIn
          );
        })
      );
  }

  private handleAuthetication(
    email: string,
    id: string,
    token: string,
    expiresIn: string
  ) {

    const expiringDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const newUser = new User(email, id, token, expiringDate);
    this.user.next(newUser);

  }

  private handleError(errorRes: HttpErrorResponse) {
    let customErr = 'an unknown error has occured';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(customErr);
    }
    console.log(errorRes.error.error.message);
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        customErr = 'this email already exists';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        customErr = 'credentials invalid';
        break;
    }
    return throwError(customErr);
  }
}
