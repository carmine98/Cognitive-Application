import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-explain-arrows-test',
  templateUrl: './explain-arrows-test.component.html',
  styleUrls: ['./explain-arrows-test.component.scss']
})
export class ExplainArrowsTestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  goToTest(){
    this.router.navigateByUrl('/arrows-test-tutorial');
  }

}
