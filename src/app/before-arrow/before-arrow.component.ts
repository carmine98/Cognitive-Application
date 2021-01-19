import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-before-arrow',
  templateUrl: './before-arrow.component.html',
  styleUrls: ['./before-arrow.component.scss']
})
export class BeforeArrowComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  goToTest(){
    this.router.navigateByUrl('/arrows-test');
  }

}
