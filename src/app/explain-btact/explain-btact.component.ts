import { Component, OnInit} from '@angular/core';

import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-explain-btact',
  templateUrl: './explain-btact.component.html',
  styleUrls: ['./explain-btact.component.scss']
})
export class ExplainBTACTComponent implements OnInit {

  audioFinished: boolean;

  constructor(private storage: AngularFireStorage) {
    this.audioFinished = false;

  }

  ngOnInit(): void {
  }



  // tslint:disable-next-line:typedef
  audio() {
    console.log('called');
    const audio = new Audio();
    audio.src = "../../../assets/audio/prova.mp3";
    audio.load();
    audio.addEventListener('ended', ev => {
      this.audioFinished = true;
    });
    audio.play();
  }


}
