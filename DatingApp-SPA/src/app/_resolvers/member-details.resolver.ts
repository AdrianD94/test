import { Injectable } from '@angular/core';
import { User } from '../_models/User';
import { Resolve, Router, ActivatedRouteSnapshot } from '../../../node_modules/@angular/router';
import { UserService } from '../Services/user.service';
import { AlertifyService } from '../Services/alertify.service';
import { Observable, of } from '../../../node_modules/rxjs';
import { catchError } from '../../../node_modules/rxjs/operators';

@Injectable()

export class MemberDetailResolver implements Resolve<User> {
    constructor(private userService: UserService, private router: Router, private alertify: AlertifyService) { }

    resolve(router: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(router.params['id']).pipe(
            catchError(error => {
                this.alertify.error('Problem retriving data');
                this.router.navigate(['/members']);
                return of(null);

            })
        );
    }

}
