import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
    templateUrl: './employee.component.html',
    // styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit() {
        // if (this.router.url === '/admin') {
        //     this.router.navigate(['/admin/dashboard']);
        // }
    }

}
