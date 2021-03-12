import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insert-new-test-id',
  templateUrl: './insert-new-test-id.component.html',
  styleUrls: ['./insert-new-test-id.component.scss']
})
export class InsertNewTestIDComponent implements OnInit {

  button!: boolean;

  private userUrl = 'http://localhost:5000';

  constructor(private router: Router, private http: HttpClient) {
    this.button = false;
  }

  ngOnInit(): void {
  }

  goToAdmin(): void{
    this.router.navigateByUrl('/admin');
  }

  goToHome(): void{
    this.router.navigateByUrl('');
  }

  onInput(): void{
    const text = (document.getElementById('testID') as HTMLInputElement).value;
    if (text !== ''){
      this.button = true;
    }else {
      this.button = false;
    }
  }

  insertTestID(): void{
    const text = (document.getElementById('testID') as HTMLInputElement).value;
    const sequence = [];
    sequence.push(text);
    const prova = Object.assign({}, sequence);
    console.log(prova);
    const url = `${this.userUrl}/insertNewTestID`;
    this.http.post(url, prova).subscribe(response => {
      console.log(response);
      (document.getElementById('testID') as HTMLInputElement).value = '';
      alert('Test ID added successfully');
    }, error => {
      console.log(error);
      if (error.statusText === 'INTERNAL SERVER ERROR'){
        alert('Test ID is already inserted');
      }else {
        alert('Database Connection Error');
      }
    });
  }

}
