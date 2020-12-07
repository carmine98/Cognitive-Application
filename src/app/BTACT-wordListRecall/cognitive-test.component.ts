import { Component, OnInit} from '@angular/core';

import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';

import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';

import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {DialogBodyComponent} from '../dialog-body/dialog-body.component';

@Component({
  selector: 'app-cognitive-test',
  templateUrl: './cognitive-test.component.html',
  styleUrls: ['./cognitive-test.component.scss']
})

export class CognitiveTestComponent implements OnInit {

  isRecording = false;
  private record: any;
  urls = [];
  private error: any;
  counter!: number;
  id!: string | null;
  storageRef = firebase.storage().ref('audio/');
  timer!: number;


  constructor(private domSanitizer: DomSanitizer, private db: AngularFirestore, private matDialog: MatDialog) {

  }
  // tslint:disable-next-line:typedef
  startRecording() {
    this.isRecording = true;

    const mediaConstraints = {
      video: false,
      audio: true
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  // tslint:disable-next-line:typedef
  successCallback(stream: any) {
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
    this.record.stop(this.processRecording.bind(this));
    this.counter = 0;
  }

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
    this.storageRef.child('' + this.id + '_BTACT').put(blob).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
    });

  }

  // tslint:disable-next-line:typedef
  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  // tslint:disable-next-line:typedef
  errorCallback(error: any) {
    this.error = 'Can not play audio in your browser';
  }

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
    })
  }


  ngOnInit(): void {
    this.startRecording();
    this.startCountdown(90);
  }

}
