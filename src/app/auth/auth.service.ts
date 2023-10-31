import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_KEY = 'AIzaSyDI4-YaZSdVUB9_QbquxlwR4bV2_OoWELs';
  frbsApiURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`;
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.frbsApiURL, {
      email: email,
      password: password,
      returnSecureToken: true,
    }).pipe(
      catchError(
        errorRes => {
          let customErr = "an unknown error has occured";
          if(!errorRes.error || !errorRes.error.error){
            return throwError(customErr)
          }
          switch(errorRes.error.error.message){
            case 'EMAIL_EXISTS' :
              customErr = " this email already exists";
          }
          return throwError(customErr)
        }
      )
    );
  }
}
