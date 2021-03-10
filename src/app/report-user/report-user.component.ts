import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import { saveAs } from 'file-saver';

@Component({
  selector: 'app-report-user',
  templateUrl: './report-user.component.html',
  styleUrls: ['./report-user.component.scss']
})
export class ReportUserComponent implements OnInit {
  button!: boolean;

  private userUrl = 'http://localhost:5000';

  dataSource!: any;
  buttonsDownload!: any;

  constructor(private router: Router, private http: HttpClient) {
    this.button = false;
    this.buttonsDownload = false;
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
        this.buttonsDownload = false;
        (document.getElementById('testID') as HTMLInputElement).value = '';
        (document.getElementById('name') as HTMLInputElement).value = '';
        (document.getElementById('surname') as HTMLInputElement).value = '';
        (document.getElementById('age') as HTMLInputElement).value = '';
        (document.getElementById('gender') as HTMLInputElement).value = '';
        (document.getElementById('timeBTACT') as HTMLInputElement).value = '';
        (document.getElementById('scoreBTACT') as HTMLInputElement).value = '';
        (document.getElementById('timeSY') as HTMLInputElement).value = '';
        (document.getElementById('scoreSY') as HTMLInputElement).value = '';
        (document.getElementById('timeANT') as HTMLInputElement).value = '';
        (document.getElementById('scoreANT') as HTMLInputElement).value = '';
        alert('User not found');
      }else {
        this.dataSource = Object.assign({}, response);
        this.buttonsDownload = true;
        // (document.getElementById('testID') as HTMLInputElement).value = '';
        (document.getElementById('name') as HTMLInputElement).value = this.dataSource.name;
        (document.getElementById('surname') as HTMLInputElement).value = this.dataSource.surname;
        (document.getElementById('age') as HTMLInputElement).value = this.dataSource.age;
        (document.getElementById('gender') as HTMLInputElement).value = this.dataSource.genre;
        (document.getElementById('timeBTACT') as HTMLInputElement).value = this.dataSource.time;
        (document.getElementById('scoreBTACT') as HTMLInputElement).value = this.dataSource.score;
        (document.getElementById('timeSY') as HTMLInputElement).value = this.dataSource.timeWritten;
        (document.getElementById('scoreSY') as HTMLInputElement).value = this.dataSource.score_test;
        (document.getElementById('timeANT') as HTMLInputElement).value = this.dataSource.RT_total;
        (document.getElementById('scoreANT') as HTMLInputElement).value = this.dataSource.rightAnswer;
      }
    }, error => {
      console.log(error);
      this.buttonsDownload = false;
    });
  }

  downloadAudio(): void {
    const text = (document.getElementById('testID') as HTMLInputElement).value;
    this.http.get(`${this.userUrl}/downloadAudio/` + text, {
      responseType: 'arraybuffer'}).subscribe(response => {
      console.log(response);
      this.downLoadFileAsAudio(response, 'audio/wav');
    }, error => {
      console.log(error);
      alert('Audio file not found');
    });
  }

  downloadText(): void {
    const text = (document.getElementById('testID') as HTMLInputElement).value;
    this.http.get(`${this.userUrl}/downloadText/` + text, {
      responseType: 'arraybuffer'}).subscribe(response => {
      console.log(response);
      this.downLoadFileAsTxt(response, 'text/txt');
    }, error => {
      console.log(error);
      alert('Text file not found');
    });
  }

  downloadCSV(): void {
    const text = (document.getElementById('testID') as HTMLInputElement).value;
    this.http.get(`${this.userUrl}/downloadCSV/` + text, {
      responseType: 'arraybuffer'}).subscribe(response => {
      console.log(response);
      this.downLoadFileAsCSV(response, 'text/csv');
    }, error => {
      console.log(error);
      alert('CSV file not found');
    });
  }

  /**
   * Method is use to download file.
   * @param data - Array Buffer data
   * @param type - type of the document.
   */
  downLoadFileAsTxt(data: any, type: string): void {
    const blob = new Blob([data], { type});
    const filename = (document.getElementById('testID') as HTMLInputElement).value + '.txt';
    saveAs(blob, filename);
  }

  downLoadFileAsAudio(data: any, type: string): void {
    const blob = new Blob([data], { type});
    const filename = (document.getElementById('testID') as HTMLInputElement).value + '.wav';
    saveAs(blob, filename);
  }

  downLoadFileAsCSV(data: any, type: string): void {
    const blob = new Blob([data], { type});
    const filename = (document.getElementById('testID') as HTMLInputElement).value + '_TRIAL.csv';
    saveAs(blob, filename);
  }
}

