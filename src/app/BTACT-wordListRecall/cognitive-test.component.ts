import { Component, OnInit} from '@angular/core';

import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';


import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {DialogBodyComponent} from '../dialog-body/dialog-body.component';

import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-cognitive-test',
  templateUrl: './cognitive-test.component.html',
  styleUrls: ['./cognitive-test.component.scss']
})

export class CognitiveTestComponent implements OnInit {

  nextButton!: boolean;
  permission = false;
  isRecording = false;
  private record: any;
  urls = [];
  private error: any;
  counter!: number;
  id!: string | null;
  timer!: number;

  private userUrl = 'http://localhost:5000';  // URL to REST API

  constructor(private domSanitizer: DomSanitizer, private matDialog: MatDialog, private http: HttpClient) {
    this.nextButton = false;
  }
  // tslint:disable-next-line:typedef
  startRecording() {
    this.isRecording = true;
    this.permission = true;
    this.startCountdown(90);
  }

  // tslint:disable-next-line:typedef
  successCallback(stream: any) {
    this.startRecording();

    const options = {
      mimeType: 'audio/mp3',
      numberOfAudioChannels: 1
    };

    // Start Actuall Recording
    const StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
  }

  // tslint:disable-next-line:typedef
  stopRecording() {
    this.isRecording = false;
    this.nextButton = true;
    this.record.stop(this.processRecording.bind(this));
    this.counter = 0;
  }

  // tslint:disable-next-line:typedef
  public stopRecordingButton() {
    this.isRecording = false;
    this.record.stop();
    this.counter = 0;
  }


  // tslint:disable-next-line:typedef
  processRecording(blob: any) {
    // @ts-ignore
    this.urls.push(URL.createObjectURL(blob));

    this.id = sessionStorage.getItem('testIdentifier');
    const filename = this.id;
    const url = `${this.userUrl}/uploadAudio`;
    const fd = new FormData();
    // @ts-ignore
    fd.append('audio_data', blob, filename);
    this.http.post(url, fd).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  errorCallback(error: any) {
    alert('Please, accept the permission for the microphone and reload the page, else' +
      'the recording won’t start.');
  }

  // tslint:disable-next-line:typedef
  startCountdown(seconds: number) {
    this.counter = seconds;

    const interval = setInterval(() => {
      console.log(this.counter);
      // @ts-ignore
      this.counter--;

      // @ts-ignore
      if (this.counter < 0 ) {
        clearInterval(interval);
        this.stopRecording();
      }
    }, 1000);
  }


  // tslint:disable-next-line:typedef
  openDialog() {
    this.record.pause();
    this.timer = this.counter;
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.matDialog.open(DialogBodyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
       if (value){
         this.stopRecordingButton();
       } else {
         this.record.resume();
         this.counter = this.timer;
       }
    });
  }



  ngOnInit(): void {

    const mediaConstraints = {
      video: false,
      audio: true
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

}
