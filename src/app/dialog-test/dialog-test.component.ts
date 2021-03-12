import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-test',
  templateUrl: './dialog-test.component.html',
  styleUrls: ['./dialog-test.component.scss']
})
export class DialogTestComponent implements OnInit {

  lang!: string | null;
  isItalian!: boolean;

  constructor(public dialogRef: MatDialogRef<DialogTestComponent>) {
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
