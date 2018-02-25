import { Injectable } from '@angular/core'

import { ReplaySubject } from 'rxjs/ReplaySubject'

/**
 * Service handling errors inside the app.
 */
@Injectable()
export class ErrorService {
	/**
	 * Stream of errors.
	 */
	errors: ReplaySubject<string> = new ReplaySubject<string>()

	/**
	 * Number of error received.
	 */
	nbErrors: number = 0

	/**
	 *  Function adding a new error to the subject and increment the total
	 *  count, call the callback function if present.
	 * @param  err      The new error to add.
	 * @param  callback Callback function.
	 */
	newError(err, callback?: Function) {
		this.nbErrors += 1
		this.errors.next(err.message)

		if (callback)
			callback()
	}
}
