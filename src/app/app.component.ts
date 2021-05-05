import { Component } from '@angular/core';

export class Employee {

	fullName?: string;

}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'test-project';

	invite(email: string): Promise<void> {
		return Math.random() > 0.2 ? Promise.resolve() : Promise.reject();
	}

	get employees(): Employee[] {
		const e = [];
		const n = Math.round(Math.random() * 10 + 10);

		for (let i = 0; i < n; i++) {
			e.push(Object.assign(new Employee(), { fullName: ['John', 'Jane', 'James', 'Michael'][Math.floor(Math.random() * 4)] + ' ' + ['Doe', 'Smith', 'Johnson', 'Jones'][Math.floor(Math.random() * 4)] }))
		}

		return e;
	} 


}
