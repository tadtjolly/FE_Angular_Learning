import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

export class CreateNewCustomValidator {
    static checkLenghtName(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        if (!c.value) {
            return of(null);
        } else {
            // return new Promise((resolve, result) => {
            //     setTimeout(() => {
            //         if (c.value < 5) {
            //             resolve({ checkMin: true });
            //         } else {
            //             resolve(null);
            //         }
            //     }, 2000);
            // });
            if (c.value < 5) {
                return of({ checkMin: true });
            } else {
                return;
            }
        }
    }
}
