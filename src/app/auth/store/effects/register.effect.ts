import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { CurrentUSerInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthService } from '../../services/auth.service';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUSerInterface) => {
            this.persistanceService.set('accessToken', currentUser.token);
            return registerSuccessAction({ currentUser });
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}
