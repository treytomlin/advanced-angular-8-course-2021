import { Observable, of, interval, throwError } from 'rxjs';
import { retryWhen, flatMap, tap} from 'rxjs/operators';
import { HttpErrorResponse} from '@angular/common/http';

export function retry_get<T>(retryCount: number = 3, retryInterval: number = 5000) {
    // return the transformer function
    return (src: Observable<T>) : Observable<T> => {
        let originalError: HttpErrorResponse

        return src.pipe(
            tap(_ => {}, err => originalError = err),
            retryWhen<T>(_ => {
                if(originalError &&
                    originalError.status < 500 &&
                    originalError.status != 0) {
                        // unrecoverable error
                        return throwError(originalError)
                    }

                    return interval(retryInterval).pipe(
                        flatMap(count => count == retryCount ?
                            throwError(originalError) : of(count))
                    )
            })
        )
    }
}