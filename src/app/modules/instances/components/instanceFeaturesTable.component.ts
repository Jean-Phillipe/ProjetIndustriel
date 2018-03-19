import { Component, Input, ViewChild, OnInit, AfterViewInit } from '@angular/core'
import { MatPaginator, MatTableDataSource } from '@angular/material'

@Component({
	selector: 'instance-features-table',
	templateUrl: 'instanceFeaturesTable.component.html',
	styleUrls: ['./instanceFeaturesTable.component.scss']
})
export class InstanceFeaturesTableComponent implements OnInit, AfterViewInit {
	@Input() stream: any

	dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([])

	displayedColumns = []

	@ViewChild(MatPaginator) paginator: MatPaginator

	ngOnInit() {
		this.stream.subscribe(
			data => {
				if (data) {
					this.dataSource.data = data.data
					this.displayedColumns = data.headers
				}
			}
		)
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator
	}
}