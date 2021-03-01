import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private userUrl = 'http://localhost:5000';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  goToInsert(){
    this.router.navigateByUrl('insert');
  }

  // tslint:disable-next-line:typedef
  goToReport(){
    this.router.navigateByUrl('report');
  }

  downloadCSV(): void{
    this.http.get(`${this.userUrl}/download`, {
      responseType: 'arraybuffer'}
    ).subscribe(response => {
      console.log(response);
      this.downLoadFile(response, 'text/csv');
    });
  }

  /**
   * Method is use to download file.
   * @param data - Array Buffer data
   * @param type - type of the document.
   */
  downLoadFile(data: any, type: string): void {
    const blob = new Blob([data], { type});
    const url = window.URL.createObjectURL(blob);
    const pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
      alert( 'Please disable your Pop-up blocker and try again.');
    }
  }

}
