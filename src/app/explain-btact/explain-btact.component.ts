import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-explain-btact',
  templateUrl: './explain-btact.component.html',
  styleUrls: ['./explain-btact.component.scss']
})
export class ExplainBTACTComponent implements OnInit {

  audioFinished: boolean;
  // @ts-ignore
  audio = new Audio();

  constructor() {
    this.audioFinished = false;
  }

  ngOnInit(): void {
  }



  // tslint:disable-next-line:typedef
  playAudio() {
    console.log('called');
    this.audio.src = '../../../assets/audio/prova.mp3';
    this.audio.load();
    this.audio.addEventListener('ended', ev => {
      this.audioFinished = true;
    });
    this.audio.play();
  }

  // tslint:disable-next-line:typedef
  stopAudio(){
    this.audio.pause();
  }


}
