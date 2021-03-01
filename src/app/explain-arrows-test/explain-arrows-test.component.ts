import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-explain-arrows-test',
  templateUrl: './explain-arrows-test.component.html',
  styleUrls: ['./explain-arrows-test.component.scss']
})
export class ExplainArrowsTestComponent implements OnInit {

  lang!: string | null;
  isItalian!: boolean;

  constructor(private router: Router) {
    this.lang = sessionStorage.getItem('lang');
    if (this.lang === 'ita'){
      this.isItalian = true;
    }else{
      this.isItalian = false;
    }
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  goToTest(){
    this.router.navigateByUrl('/arrows-test-tutorial');
  }

}
