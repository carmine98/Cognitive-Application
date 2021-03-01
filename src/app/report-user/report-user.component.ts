import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {DataSource} from '@angular/cdk/collections';


@Component({
  selector: 'app-report-user',
  templateUrl: './report-user.component.html',
  styleUrls: ['./report-user.component.scss']
})
export class ReportUserComponent implements OnInit {
  button!: boolean;

  private userUrl = 'http://localhost:5000';

  dataSource!: any;

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
    this.button = text !== '';
  }

  searchUser(): void{
    const text = (document.getElementById('testID') as HTMLInputElement).value;
    const sequence = [];
    sequence.push(text);
    const prova = Object.assign({}, sequence);
    const url = `${this.userUrl}/report`;
    this.http.post(url, prova).subscribe(response => {
      console.log(response);
      if (response === null){
        (document.getElementById('testID') as HTMLInputElement).value = '';
        (document.getElementById('name') as HTMLInputElement).value = '';
        (document.getElementById('surname') as HTMLInputElement).value = '';
        (document.getElementById('age') as HTMLInputElement).value = '';
        (document.getElementById('gender') as HTMLInputElement).value = '';
        (document.getElementById('audio') as HTMLInputElement).value = '';
        (document.getElementById('text') as HTMLInputElement).value = '';
        (document.getElementById('timeBTACT') as HTMLInputElement).value = '';
        (document.getElementById('scoreBTACT') as HTMLInputElement).value = '';
        (document.getElementById('timeSY') as HTMLInputElement).value = '';
        (document.getElementById('scoreSY') as HTMLInputElement).value = '';
        (document.getElementById('timeANT') as HTMLInputElement).value = '';
        (document.getElementById('scoreANT') as HTMLInputElement).value = '';
        alert('User not found');
      }else {
        this.dataSource = Object.assign({}, response);
        (document.getElementById('testID') as HTMLInputElement).value = '';
        (document.getElementById('name') as HTMLInputElement).value = this.dataSource.name;
        (document.getElementById('surname') as HTMLInputElement).value = this.dataSource.surname;
        (document.getElementById('age') as HTMLInputElement).value = this.dataSource.age;
        (document.getElementById('gender') as HTMLInputElement).value = this.dataSource.genre;
        (document.getElementById('audio') as HTMLInputElement).value = this.dataSource.path_audio;
        (document.getElementById('text') as HTMLInputElement).value = this.dataSource.path_text;
        (document.getElementById('timeBTACT') as HTMLInputElement).value = this.dataSource.time;
        (document.getElementById('scoreBTACT') as HTMLInputElement).value = this.dataSource.score;
        (document.getElementById('timeSY') as HTMLInputElement).value = this.dataSource.timeWritten;
        (document.getElementById('scoreSY') as HTMLInputElement).value = this.dataSource.score_test;
        (document.getElementById('timeANT') as HTMLInputElement).value = this.dataSource.RT_total;
        (document.getElementById('scoreANT') as HTMLInputElement).value = this.dataSource.totalScore;
      }
    }, error => {
      console.log(error);
    });
  }

}

