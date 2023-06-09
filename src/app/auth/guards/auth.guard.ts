import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, UrlSegment, RouterStateSnapshot, Router, CanActivate, CanMatch } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

//Toda esta parte del codigo ya quedo obsoleta en angular 16

// @Injectable({providedIn: 'root'})
// export class AuthGuard implements CanActivate, CanMatch {

//   constructor(private authService: AuthService,
//       private router: Router) { }

//   private checkAuthStatus(): boolean | Observable<boolean> {
//     return this.authService.checkAuhthentication()
//       .pipe(
//         tap( isAuthenticated => {
//           if( !isAuthenticated ) {
//             this.router.navigate(['./auth/login'])
//           }
//         })
//       )
//   }

//   canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
//     return this.checkAuthStatus();
//   }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
//     return this.checkAuthStatus();;
//   }
// }


//Esta forma es la de angular 16

const checkAuthStatus = (): boolean | Observable<boolean> => {
  //se inyectan el AuthService y el Router
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuhthentication().pipe(
    tap((isAuthenticated) => {
      if (!isAuthenticated) {
        router.navigate(['/auth/login']);
      }
    })
  );
};

export const canActivateGuard: CanActivateFn = ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) => {
  // console.log('CanActivate');
  // console.log({ route, state });

  return checkAuthStatus();
};

export const canMatchGuard: CanMatchFn = ( route: Route, segments: UrlSegment[] ) => {
  // console.log('CanMatch');
  // console.log({ route, segments });

  return checkAuthStatus();
};
