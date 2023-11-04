import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map, tap } from "rxjs";
import { AuthService } from "./auth.service";



  


@Injectable({
  providedIn : "root"
})
export class AuthGuard implements CanActivate{
  constructor(private authService : AuthService,private router : Router){}
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    return this.authService.user.pipe(map(
      user => { return !!user}
    )/*
    // old method
    ,tap(
      isAuth => {
        if(!isAuth){
          this.router.navigate(['/auth']);
        }
      }
    )*/)
  }

}