import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import {Router} from '@angular/router';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent implements OnInit {

  lang!: string | null;
  isItalian!: boolean;

  constructor(public dialogRef: MatDialogRef<DialogBodyComponent>, private router: Router) {
    this.lang = sessionStorage.getItem('lang');
    if (this.lang === 'ita'){
      this.isItalian = true;
    }else{
      this.isItalian = false;
    }
  }

  ngOnInit(): void {
  }


}
