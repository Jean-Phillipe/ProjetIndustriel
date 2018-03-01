import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'

import { Solver } from '../solver.model'
import { SolverService } from '../solver.service'

@Component({
	selector: 'solver-details',
	templateUrl: './solverDetails.component.html',
	styleUrls: ['./solverDetails.component.css']
})
export class SolverDetailsComponent implements OnInit, OnDestroy {

	solver: Solver

	subscriptions = []

	constructor (
		private route: ActivatedRoute,
		private experimentService: SolverService
	) {}

	ngOnInit() {
		this.subscriptions.push(this.route.params.subscribe(
			params => this.experimentService.getSolver(params['solverID']).subscribe(
				data => this.solver = data,
				err => { throw err }
			)
		))
	}

	/**
	 * Unsubscribe of all subscriptions on destory to prevent memory leaks.
	 */
	ngOnDestroy() {
		this.subscriptions.forEach((subscription) => {
			subscription.unsubscribe()
		})
	}
}
