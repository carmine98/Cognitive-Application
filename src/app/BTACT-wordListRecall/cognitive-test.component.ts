import { Component, OnInit } from '@angular/core';

import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-cognitive-test',
  templateUrl: './cognitive-test.component.html',
  styleUrls: ['./cognitive-test.component.scss']
})
export class CognitiveTestComponent implements OnInit {

  title = 'record-app';
  isRecording = false;
  private record: any;
  urls = [];
  private error: any;

  constructor(private domSanitizer: DomSanitizer, private db: AngularFirestore) {
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
      mimeType: 'audio/wav',
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
  }

  // tslint:disable-next-line:typedef
  processRecording(blob: any) {
    // @ts-ignore
    this.urls.push(URL.createObjectURL(blob));
  }

  // tslint:disable-next-line:typedef
  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  // tslint:disable-next-line:typedef
  errorCallback(error: any) {
    this.error = 'Can not play audio in your browser';
  }

  ngOnInit(): void {
  }

}
