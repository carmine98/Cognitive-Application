import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-before-arrow',
  templateUrl: './before-arrow.component.html',
  styleUrls: ['./before-arrow.component.scss']
})
export class BeforeArrowComponent implements OnInit {

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
    this.router.navigateByUrl('/arrows-test');
  }

}
