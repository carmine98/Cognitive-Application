import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogBodyComponent>, private router: Router) { }

  ngOnInit(): void {
  }

  goSymbol() {
    this.router.navigateByUrl('/symbol');
  }


}
