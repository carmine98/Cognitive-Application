import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-arrows-test',
  templateUrl: './arrows-test.component.html',
  styleUrls: ['./arrows-test.component.scss']
})
export class ArrowsTestComponent implements OnInit {

  a = [];
  k!: number;

  interval!: any;

  rightAnswer!: number;
  wrongAnswer!: number;


  time!: number;
  plus: boolean;
  counterPlus!: number;
  button: boolean;
  answer!: number;
  userAnswer!: string;
  counterAnswer!: number;
  counterRightAnswer!: number;
  cue1: boolean;
  cue2: boolean;

  // tslint:disable-next-line:variable-name
  id!: string | null;
  timeRightAnswer!: number;
  finalRightAnswer!: number;

  lang!: string | null;
  isItalian!: boolean;

  constructor(private router: Router) {
    this.lang = sessionStorage.getItem('lang');
    if (this.lang === 'ita'){
      this.isItalian = true;
    }else{
      this.isItalian = false;
    }
    this.cue1 = false;
    this.cue2 = false;
    this.answer = 1.5;
    this.plus = true;
    this.button = false;

    this.rightAnswer = 0;
    this.wrongAnswer = 0;

    this.counterRightAnswer = 0;
    this.timeRightAnswer = 0;
    this.finalRightAnswer = 0;

    this.k = 0;

    for (let i = 0; i < 32; i++) {
      // @ts-ignore
      this.a[i] = i;
    }
  }

  ngOnInit(): void {
    this.loop().then(() => {
      this.router.navigateByUrl('/final');
    });
  }

  // tslint:disable-next-line:typedef
  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // tslint:disable-next-line:typedef
  getRandomTime(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // tslint:disable-next-line:typedef
  rightButton(){
    this.counterAnswer = -1;
    this.userAnswer = 'right';
  }

  // tslint:disable-next-line:typedef
  leftButton(){
    this.counterAnswer = -1;
    this.userAnswer = 'left';
  }

  // tslint:disable-next-line:typedef
  startTimerCentralCueCongruentLeftUp(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerStar(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerStar(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/star.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterStar(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterStar(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/plus.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentLeft2(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCentralCueCongruentRightUp(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerStar2(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerStar2(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/star.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterStar2(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterStar2(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/plus.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentRight2(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCentralCueInCongruentLeftUp(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerStar3(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerStar3(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/star.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterStar3(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterStar3(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/plus.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerIncongruentLeft2(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCentralCueInCongruentRightUp(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerStar4(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerStar4(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/star.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterStar4(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterStar4(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/plus.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerIncongruentRight2(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCentralCueNeutralLeftUp(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerStar5(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerStar5(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/star.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterStar5(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterStar5(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/plus.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralLeft2(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCentralCueNeutralRightUp(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerStar6(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerStar6(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/star.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterStar6(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterStar6(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/plus.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralRight2(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCentralCueCongruentLeftDown(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerStarDown(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerStarDown(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/star.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterStarDown(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterStarDown(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/plus.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentLeft2Down(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCentralCueCongruentRightDown(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerStar2Down(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerStar2Down(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/star.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterStar2Down(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterStar2Down(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/plus.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentRight2Down(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCentralCueInCongruentLeftDown(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerStar3Down(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerStar3Down(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/star.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterStar3Down(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterStar3Down(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/plus.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerIncongruentLeft2Down(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCentralCueInCongruentRightDown(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerStar4Down(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerStar4Down(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/star.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterStar4Down(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterStar4Down(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/plus.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerIncongruentRight2Down(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCentralCueNeutralLeftDown(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerStar5Down(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerStar5Down(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/star.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterStar5Down(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterStar5Down(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/plus.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralLeft2Down(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCentralCueNeutralRightDown(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerStar6Down(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerStar6Down(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/star.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterStar6Down(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterStar6Down(seconds: number) {
    let counter = seconds;

    const img = document.getElementById('center') as HTMLImageElement;
    img.src = 'assets/images/plus.png';

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralRight2Down(this.answer);
      }
    }, 100);
  }


  // tslint:disable-next-line:typedef
  startTimerDoubleCueCongruentLeftUp(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCue(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCue(seconds: number) {
    let counter = seconds;

    this.cue1 = true;
    this.cue2 = true;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCue(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCue(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentLeft3(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerDoubleCueCongruentRightUp(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCue2(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCue2(seconds: number) {
    let counter = seconds;

    this.cue1 = true;
    this.cue2 = true;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCue2(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCue2(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentRight3(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerDoubleCueInCongruentLeftUp(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCue3(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCue3(seconds: number) {
    let counter = seconds;

    this.cue1 = true;
    this.cue2 = true;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCue3(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCue3(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerIncongruentLeft3(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerDoubleCueInCongruentRightUp(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCue4(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCue4(seconds: number) {
    let counter = seconds;

    this.cue1 = true;
    this.cue2 = true;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCue4(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCue4(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerIncongruentRight3(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerDoubleCueNeutralLeftUp(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCue5(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCue5(seconds: number) {
    let counter = seconds;

    this.cue1 = true;
    this.cue2 = true;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCue5(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCue5(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralLeft3(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerDoubleCueNeutralRightUp(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCue6(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCue6(seconds: number) {
    let counter = seconds;

    this.cue1 = true;
    this.cue2 = true;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCue6(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCue6(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralRight3(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerDoubleCueCongruentLeftDown(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCueDown(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCueDown(seconds: number) {
    let counter = seconds;

    this.cue1 = true;
    this.cue2 = true;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCueDown(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCueDown(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentLeft3Down(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerDoubleCueCongruentRightDown(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCue2Down(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCue2Down(seconds: number) {
    let counter = seconds;

    this.cue1 = true;
    this.cue2 = true;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCue2Down(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCue2Down(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentRight3Down(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerDoubleCueInCongruentLeftDown(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCue3(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCue3Down(seconds: number) {
    let counter = seconds;

    this.cue1 = true;
    this.cue2 = true;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCue3Down(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCue3Down(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerIncongruentLeft3Down(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerDoubleCueInCongruentRightDown(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCue4Down(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCue4Down(seconds: number) {
    let counter = seconds;

    this.cue1 = true;
    this.cue2 = true;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCue4Down(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCue4Down(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerIncongruentRight3Down(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerDoubleCueNeutralLeftDown(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCue5Down(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCue5Down(seconds: number) {
    let counter = seconds;

    this.cue1 = true;
    this.cue2 = true;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCue5Down(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCue5Down(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralLeft3Down(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerDoubleCueNeutralRightDown(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCue6Down(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCue6Down(seconds: number) {
    let counter = seconds;

    this.cue1 = true;
    this.cue2 = true;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCue6Down(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCue6Down(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralRight3Down(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerSpecialCueCongruentLeftUp(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCueSpecial(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCueSpecial(seconds: number) {
    let counter = seconds;

    this.cue1 = true;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCueSpecial(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCueSpecial(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentLeft4(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerSpecialCueCongruentLeftDown(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCueSpecialDown(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCueSpecialDown(seconds: number) {
    let counter = seconds;

    this.cue2 = true;
    this.cue1 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCueSpecialDown(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCueSpecialDown(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentLeft4Down(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerSpecialCueCongruentRightDown(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCueSpecial2(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCueSpecial2(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = true;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCueSpecial2(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCueSpecial2(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentRight4(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerSpecialCueInCongruentLeftUp(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCueSpecial3(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCueSpecial3(seconds: number) {
    let counter = seconds;

    this.cue1 = true;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCueSpecial3(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCueSpecial3(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerIncongruentLeft4(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerSpecialCueIncongruentRightDown(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCueSpecial4(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCueSpecial4(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = true;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCueSpecial4(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCueSpecial4(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerIncongruentRight4(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerSpecialCueNeutralLeftUp(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCueSpecial5(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCueSpecial5(seconds: number) {
    let counter = seconds;

    this.cue1 = true;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCueSpecial5(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCueSpecial5(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralLeft4(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerSpecialCueNeutralRightDown(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCueSpecial6(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCueSpecial6(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = true;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCueSpecial6(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCueSpecial6(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralRight4(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerSpecialCueCongruentRightUp(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCueSpecial2Up(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCueSpecial2Up(seconds: number) {
    let counter = seconds;

    this.cue2 = false;
    this.cue1 = true;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCueSpecial2Up(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCueSpecial2Up(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentRight4Up(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerSpecialCueInCongruentLeftDown(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCueSpecial3Down(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCueSpecial3Down(seconds: number) {
    let counter = seconds;

    this.cue2 = true;
    this.cue1 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCueSpecial3Down(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCueSpecial3Down(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerIncongruentLeft4Down(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerSpecialCueIncongruentRightUp(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCueSpecial4Up(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCueSpecial4Up(seconds: number) {
    let counter = seconds;

    this.cue2 = false;
    this.cue1 = true;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCueSpecial4Up(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCueSpecial4Up(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerIncongruentRight4Up(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerSpecialCueNeutralLeftDown(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCueSpecial5Down(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCueSpecial5Down(seconds: number) {
    let counter = seconds;

    this.cue1 = true;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCueSpecial5Down(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCueSpecial5Down(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralLeft4Down(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerSpecialCueNeutralRightUp(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerCueSpecial6Up(0.1);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCueSpecial6Up(seconds: number) {
    let counter = seconds;

    this.cue2 = false;
    this.cue1 = true;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAfterCueSpecial6Up(0.4);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAfterCueSpecial6Up(seconds: number) {
    let counter = seconds;

    this.cue1 = false;
    this.cue2 = false;

    const interval = setInterval(() => {
      // console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralRight4Up(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCongruentRightUp(seconds: number) {
    let plus = seconds;

    const interval = setInterval(() => {
      // console.log(plus);
      // @ts-ignore
      plus = plus - 0.1;

      // @ts-ignore
      if (plus < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentRight(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerIncongruentLeftUp(seconds: number) {
    let plus = seconds;

    const interval = setInterval(() => {
      // console.log(plus);
      // @ts-ignore
      plus = plus - 0.1;

      // @ts-ignore
      if (plus < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerIncongruentLeft(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerIncongruentRightUp(seconds: number) {
    let plus = seconds;

    const interval = setInterval(() => {
      // console.log(plus);
      // @ts-ignore
      plus = plus - 0.1;

      // @ts-ignore
      if (plus < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerIncongruentRight(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerNeutralLeftUp(seconds: number) {
    let plus = seconds;

    const interval = setInterval(() => {
      // console.log(plus);
      // @ts-ignore
      plus = plus - 0.1;

      // @ts-ignore
      if (plus < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralLeft(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerNeutralRightUp(seconds: number) {
    let plus = seconds;

    const interval = setInterval(() => {
      // console.log(plus);
      // @ts-ignore
      plus = plus - 0.1;

      // @ts-ignore
      if (plus < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralRight(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCongruentLeftUp(seconds: number) {
    // console.log('start');
    let plus = seconds;

    const interval = setInterval(() => {
      // console.log(plus);
      // @ts-ignore
      plus = plus - 0.1;

      // @ts-ignore
      if (plus < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentLeftUp(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerCongruentLeftUp(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/congruentLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }

        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCongruentLeftDown(seconds: number) {
    // console.log('start');
    let plus = seconds;

    const interval = setInterval(() => {
      // console.log(plus);
      // @ts-ignore
      plus = plus - 0.1;

      // @ts-ignore
      if (plus < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentLeftDown(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerCongruentLeftDown(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/congruentLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerCongruentRightDown(seconds: number) {
    // console.log('start');
    let plus = seconds;

    const interval = setInterval(() => {
      // console.log(plus);
      // @ts-ignore
      plus = plus - 0.1;

      // @ts-ignore
      if (plus < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentRightDown(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerCongruentRightDown(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/congruentRight.png';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerInCongruentLeftDown(seconds: number) {
    // console.log('start');
    let plus = seconds;

    const interval = setInterval(() => {
      // console.log(plus);
      // @ts-ignore
      plus = plus - 0.1;

      // @ts-ignore
      if (plus < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerInCongruentLeftDown(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerInCongruentLeftDown(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/incongruentLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerInCongruentRightDown(seconds: number) {
    // console.log('start');
    let plus = seconds;

    const interval = setInterval(() => {
      // console.log(plus);
      // @ts-ignore
      plus = plus - 0.1;

      // @ts-ignore
      if (plus < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerInCongruentRightDown(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerInCongruentRightDown(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/incongruentRight.png';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerNeutralLeftDown(seconds: number) {
    // console.log('start');
    let plus = seconds;

    const interval = setInterval(() => {
      // console.log(plus);
      // @ts-ignore
      plus = plus - 0.1;

      // @ts-ignore
      if (plus < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralLeftDown(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerNeutralLeftDown(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/neutralLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerNeutralRightDown(seconds: number) {
    // console.log('start');
    let plus = seconds;

    const interval = setInterval(() => {
      // console.log(plus);
      // @ts-ignore
      plus = plus - 0.1;

      // @ts-ignore
      if (plus < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralRightDown(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef adjacent-overload-signatures
  startTimerAnswerNeutralRightDown(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/neutralRight.png';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerCongruentRight(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/congruentRight.png';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerIncongruentLeft(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/incongruentLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerIncongruentRight(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/incongruentRight.png';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerNeutralLeft(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/neutralLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerNeutralRight(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/neutralRight.png';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerCongruentLeft2(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/congruentLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerCongruentRight2(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/congruentRight.png';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerIncongruentLeft2(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/incongruentLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerIncongruentRight2(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/incongruentRight.png';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerNeutralLeft2(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/neutralLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          // console.log(congruent); this.rightAnswer++;
          this.counterRightAnswer = 1.7 - this.timeRightAnswer;
          this.finalRightAnswer = this.finalRightAnswer + this.counterRightAnswer;
        }else {
          this.wrongAnswer++;
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerNeutralRight2(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/neutralRight.png';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerCongruentLeft2Down(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/congruentLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerCongruentRight2Down(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/congruentRight.png';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerIncongruentLeft2Down(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/incongruentLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerIncongruentRight2Down(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/incongruentRight.png';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerNeutralLeft2Down(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/neutralLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerNeutralRight2Down(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/neutralRight.png';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerCongruentLeft3(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/congruentLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerCongruentRight3(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/congruentRight.png';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerIncongruentLeft3(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/incongruentLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerIncongruentRight3(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/incongruentRight.png';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerNeutralLeft3(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/neutralLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerNeutralRight3(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/neutralRight.png';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerCongruentLeft3Down(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/congruentLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerCongruentRight3Down(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/congruentRight.png';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerIncongruentLeft3Down(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/incongruentLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerIncongruentRight3Down(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/incongruentRight.png';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerNeutralLeft3Down(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/neutralLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerNeutralRight3Down(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/neutralRight.png';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerCongruentLeft4(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/congruentLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerCongruentLeft4Down(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/congruentLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerCongruentRight4(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/congruentRight.png';
    const img2 = document.getElementById('arrow') as HTMLImageElement;
    img2.src = '';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        // tslint:disable-next-line:no-shadowed-variable
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerIncongruentLeft4(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = '';
    const img2 = document.getElementById('arrow') as HTMLImageElement;
    img2.src = 'assets/images/incongruentLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        // tslint:disable-next-line:no-shadowed-variable
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerIncongruentRight4(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/incongruentRight.png';
    const img2 = document.getElementById('arrow') as HTMLImageElement;
    img2.src = '';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        // tslint:disable-next-line:no-shadowed-variable
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerNeutralLeft4(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/neutralLeft.png';
    const img2 = document.getElementById('arrow2') as HTMLImageElement;
    img2.src = '';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        // tslint:disable-next-line:no-shadowed-variable
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerNeutralRight4(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/neutralRight.png';
    const img2 = document.getElementById('arrow') as HTMLImageElement;
    img2.src = '';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        // tslint:disable-next-line:no-shadowed-variable
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
        this.plus = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerCongruentRight4Up(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/congruentRight.png';
    const img2 = document.getElementById('arrow2') as HTMLImageElement;
    img2.src = '';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        // tslint:disable-next-line:no-shadowed-variable
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerIncongruentLeft4Down(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = '';
    const img2 = document.getElementById('arrow2') as HTMLImageElement;
    img2.src = 'assets/images/incongruentLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        // tslint:disable-next-line:no-shadowed-variable
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerIncongruentRight4Up(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/incongruentRight.png';
    const img2 = document.getElementById('arrow2') as HTMLImageElement;
    img2.src = '';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        // tslint:disable-next-line:no-shadowed-variable
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerNeutralLeft4Down(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow2') as HTMLImageElement;
    img.src = 'assets/images/neutralLeft.png';
    const img2 = document.getElementById('arrow') as HTMLImageElement;
    img2.src = '';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        // tslint:disable-next-line:no-shadowed-variable
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerAnswerNeutralRight4Up(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/neutralRight.png';
    const img2 = document.getElementById('arrow2') as HTMLImageElement;
    img2.src = '';
    const congruent = 'right';
    this.button = true;

    const interval = setInterval(() => {
      // console.log(this.counterAnswer);
      // @ts-ignore
      if (this.counterAnswer !== -1){
        this.timeRightAnswer = this.counterAnswer;
      }
      console.log(this.timeRightAnswer);
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.lang === 'ita'){
          if (this.userAnswer === congruent){
            alert('Risposta giusta');
          }else if (this. userAnswer === ''){
            alert('Tempo scaduto');
          }else {
            alert('Risposta sbagliata');
          }
        }else{
          if (this.userAnswer === congruent){
            alert('Right answer');
          }else if (this. userAnswer === ''){
            alert('Time is up');
          }else {
            alert('Wrong answer');
          }
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        // tslint:disable-next-line:no-shadowed-variable
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
        this.plus = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  async loop() {
    const items = this.a;
    await new Promise(async (resolve, reject) => {
      try {
        if (items.length === 0) { // @ts-ignore
          return resolve(); }
        const funSync = async () => {
          const r = this.getRandomTime(0.4, 1.2);
          console.log(items[this.k]);
          this.userAnswer = '';
          this.counterRightAnswer = 0;
          this.timeRightAnswer = 0;
          if (items[this.k] === 0){
            this.startTimerCongruentLeftUp(r);
          }
          if (items[this.k] === 1){
            this.startTimerCongruentRightUp(r);
          }
          if (items[this.k] === 2){
            this.startTimerIncongruentLeftUp(r);
          }
          if (items[this.k] === 3){
            this.startTimerIncongruentRightUp(r);
          }
          if (items[this.k] === 4){
            this.startTimerCongruentLeftDown(r);
          }
          if (items[this.k] === 5){
            this.startTimerCongruentRightDown(r);
          }
          if (items[this.k] === 6){
            this.startTimerInCongruentLeftDown(r);
          }
          if (items[this.k] === 7){
            this.startTimerInCongruentRightDown(r);
          }
          if (items[this.k] === 8){
            this.startTimerCentralCueCongruentLeftUp(r);
          }
          if (items[this.k] === 9){
            this.startTimerCentralCueCongruentRightUp(r);
          }
          if (items[this.k] === 10){
            this.startTimerCentralCueInCongruentLeftUp(r);
          }
          if (items[this.k] === 11){
            this.startTimerCentralCueInCongruentRightUp(r);
          }
          if (items[this.k] === 12){
            this.startTimerCentralCueCongruentLeftDown(r);
          }
          if (items[this.k] === 13){
            this.startTimerCentralCueCongruentRightDown(r);
          }
          if (items[this.k] === 14){
            this.startTimerCentralCueInCongruentLeftDown(r);
          }
          if (items[this.k] === 15){
            this.startTimerCentralCueInCongruentRightDown(r);
          }
          if (items[this.k] === 16){
            this.startTimerDoubleCueCongruentLeftUp(r);
          }
          if (items[this.k] === 17){
            this.startTimerDoubleCueCongruentRightUp(r);
          }
          if (items[this.k] === 18){
            this.startTimerDoubleCueInCongruentLeftUp(r);
          }
          if (items[this.k] === 19){
            this.startTimerDoubleCueInCongruentRightUp(r);
          }
          if (items[this.k] === 20){
            this.startTimerDoubleCueCongruentLeftDown(r);
          }
          if (items[this.k] === 21){
            this.startTimerDoubleCueCongruentRightDown(r);
          }
          if (items[this.k] === 22){
            this.startTimerDoubleCueInCongruentLeftDown(r);
          }
          if (items[this.k] === 23){
            this.startTimerDoubleCueInCongruentRightDown(r);
          }
          if (items[this.k] === 24){
            this.startTimerSpecialCueCongruentLeftUp(r);
          }
          if (items[this.k] === 25){
            this.startTimerSpecialCueCongruentRightDown(r);
          }
          if (items[this.k] === 26){
            this.startTimerSpecialCueInCongruentLeftUp(r);
          }
          if (items[this.k] === 27){
            this.startTimerSpecialCueIncongruentRightDown(r);
          }
          if (items[this.k] === 28){
            this.startTimerSpecialCueCongruentLeftDown(r);
          }
          if (items[this.k] === 29){
            this.startTimerSpecialCueCongruentRightUp(r);
          }
          if (items[this.k] === 30){
            this.startTimerSpecialCueInCongruentLeftDown(r);
          }
          if (items[this.k] === 31){
            this.startTimerSpecialCueIncongruentRightUp(r);
          }
          if (this.k === items.length) {
            // @ts-ignore
            resolve();
          } else {
            const d = (r + this.answer) * 1000;
            const d1 = (r + this.answer + 0.5) * 1000;
            if (items[this.k] < 24){
              await this.delay(d + 1000);
            }else {
              await this.delay(d1 + 1000);
            }
            console.log('Giusto ' + this.rightAnswer);
            console.log('Sbagliato ' + this.wrongAnswer);
            this.k++;
            funSync();
          }
        };
        funSync();
      } catch (e) {
        reject(e);
      }
    });
  }

  // tslint:disable-next-line:typedef
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
