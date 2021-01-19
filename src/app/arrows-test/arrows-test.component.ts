import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-arrows-test',
  templateUrl: './arrows-test.component.html',
  styleUrls: ['./arrows-test.component.scss']
})
export class ArrowsTestComponent implements OnInit {

  plus: boolean;
  counterPlus!: number;
  button: boolean;
  answer!: number;
  userAnswer!: string;
  counterAnswer!: number;
  cue1: boolean;
  cue2: boolean;

  constructor(private router: Router) {
    this.cue1 = false;
    this.cue2 = false;
    this.answer = 1.7;
    this.plus = true;
    this.button = false;
    this.counterPlus = this.getRandomTime(0.4, 1.6);
    this.startTimer(this.counterPlus);
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getRandomTime(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // tslint:disable-next-line:typedef
  startTimer(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentLeft(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerBeforeStar(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
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
      console.log(counter);
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
      console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentLeft2(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerBeforeStar2(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
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
      console.log(counter);
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
      console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentRight2(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerBeforeStar3(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
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
      console.log(counter);
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
      console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerIncongruentLeft2(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerBeforeStar4(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
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
      console.log(counter);
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
      console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerIncongruentRight2(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerBeforeStar5(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
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
      console.log(counter);
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
      console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralLeft2(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerBeforeStar6(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
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
      console.log(counter);
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
      console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralRight2(this.answer);
      }
    }, 100);
  }


  // tslint:disable-next-line:typedef
  startTimerBeforeCue(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
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
      console.log(counter);
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
      console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentLeft3(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerBeforeCue2(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
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
      console.log(counter);
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
      console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentRight3(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerBeforeCue3(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
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
      console.log(counter);
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
      console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerIncongruentLeft3(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerBeforeCue4(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
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
      console.log(counter);
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
      console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerIncongruentRight3(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerBeforeCue5(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
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
      console.log(counter);
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
      console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralLeft3(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerBeforeCue6(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
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
      console.log(counter);
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
      console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralRight3(this.answer);
      }
    }, 100);
  }


  // tslint:disable-next-line:typedef
  startTimerBeforeCueSpecial(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
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
      console.log(counter);
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
      console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentLeft4(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerBeforeCueSpecial2(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
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
      console.log(counter);
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
      console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerCongruentRight4(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerBeforeCueSpecial3(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
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
      console.log(counter);
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
      console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerIncongruentLeft4(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerBeforeCueSpecial4(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
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
      console.log(counter);
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
      console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerIncongruentRight4(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerBeforeCueSpecial5(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
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
      console.log(counter);
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
      console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralLeft4(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerBeforeCueSpecial6(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
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
      console.log(counter);
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
      console.log(counter);
      counter = counter - 0.1;
      if (counter < 0 ) {
        clearInterval(interval);
        this.startTimerAnswerNeutralRight4(this.answer);
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  startTimerPlus(seconds: number) {
    let plus = seconds;

    const interval = setInterval(() => {
      console.log(plus);
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
  startTimerPlusIncongruentLeft(seconds: number) {
    let plus = seconds;

    const interval = setInterval(() => {
      console.log(plus);
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
  startTimerPlusIncongruentRight(seconds: number) {
    let plus = seconds;

    const interval = setInterval(() => {
      console.log(plus);
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
  startTimerPlusNeutralLeft(seconds: number) {
    let plus = seconds;

    const interval = setInterval(() => {
      console.log(plus);
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
  startTimerPlusNeutralRight(seconds: number) {
    let plus = seconds;

    const interval = setInterval(() => {
      console.log(plus);
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
  startTimerAnswerCongruentLeft(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/congruentLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        this.button = false;
        const r = this.getRandomTime(0.4, 1.6) + 1;
        this.startTimerPlus(r);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        this.button = false;
        const r1 = this.getRandomTime(0.4, 1.6) + 1;
        this.startTimerPlusIncongruentLeft(r1);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        this.button = false;
        const r2 = this.getRandomTime(0.4, 1.6) + 1;
        this.startTimerPlusIncongruentRight(r2);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        this.button = false;
        const r3 = this.getRandomTime(0.4, 1.6) + 1;
        this.startTimerPlusNeutralLeft(r3);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        this.button = false;
        const r4 = this.getRandomTime(0.4, 1.6) + + 1;
        this.startTimerPlusNeutralRight(r4);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        this.button = false;
        const r5 = this.getRandomTime(0.4, 1.6) + + 1;
        this.startTimerBeforeStar(r5);
      }
    }, 100);
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
  startTimerAnswerCongruentLeft2(seconds: number) {
    this.counterAnswer = seconds;

    const img = document.getElementById('arrow') as HTMLImageElement;
    img.src = 'assets/images/congruentLeft.png';
    const congruent = 'left';
    this.button = true;

    const interval = setInterval(() => {
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        this.button = false;
        const r = this.getRandomTime(0.4, 1.6) + 1;
        this.startTimerBeforeStar2(r);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        this.button = false;
        const r1 = this.getRandomTime(0.4, 1.6) + 1;
        this.startTimerBeforeStar3(r1);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        this.button = false;
        const r2 = this.getRandomTime(0.4, 1.6) + 1;
        this.startTimerBeforeStar4(r2);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        this.button = false;
        const r3 = this.getRandomTime(0.4, 1.6) + 1;
        this.startTimerBeforeStar5(r3);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        this.button = false;
        const r4 = this.getRandomTime(0.4, 1.6) + + 1;
        this.startTimerBeforeStar6(r4);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        this.button = false;
        const r5 = this.getRandomTime(0.4, 1.6) + + 1;
        this.startTimerBeforeCue(r5);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        this.button = false;
        const r = this.getRandomTime(0.4, 1.6) + 1;
        this.startTimerBeforeCue2(r);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        this.button = false;
        const r1 = this.getRandomTime(0.4, 1.6) + 1;
        this.startTimerBeforeCue3(r1);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        this.button = false;
        const r2 = this.getRandomTime(0.4, 1.6) + 1;
        this.startTimerBeforeCue4(r2);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        this.button = false;
        const r3 = this.getRandomTime(0.4, 1.6) + 1;
        this.startTimerBeforeCue5(this.answer);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        this.button = false;
        const r4 = this.getRandomTime(0.4, 1.6) + + 1;
        this.startTimerBeforeCue6(r4);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        this.button = false;
        const r5 = this.getRandomTime(0.4, 1.6) + + 1;
        this.startTimerBeforeCueSpecial(r5);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        this.button = false;
        const r = this.getRandomTime(0.4, 1.6) + 1;
        this.startTimerBeforeCueSpecial2(r);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        // tslint:disable-next-line:no-shadowed-variable
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
        const r1 = this.getRandomTime(0.4, 1.6) + 1;
        this.startTimerBeforeCueSpecial3(r1);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        // tslint:disable-next-line:no-shadowed-variable
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
        const r2 = this.getRandomTime(0.4, 1.6) + 1;
        this.startTimerBeforeCueSpecial4(r2);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        // tslint:disable-next-line:no-shadowed-variable
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
        const r3 = this.getRandomTime(0.4, 1.6) + 1;
        this.startTimerBeforeCueSpecial5(r3);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        // tslint:disable-next-line:no-shadowed-variable
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
        const r4 = this.getRandomTime(0.4, 1.6) + + 1;
        this.startTimerBeforeCueSpecial6(r4);
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
      console.log(this.counterAnswer);
      // @ts-ignore
      this.counterAnswer = this.counterAnswer - 0.1;
      // @ts-ignore
      if (this.counterAnswer < 0 ) {
        clearInterval(interval);
        // tslint:disable-next-line:no-shadowed-variable
        if (this.userAnswer === congruent){
          alert('right answer');
        }else {
          alert('wrong answer');
        }
        // tslint:disable-next-line:no-shadowed-variable
        const img = document.getElementById('arrow') as HTMLImageElement;
        img.src = '';
        // tslint:disable-next-line:no-shadowed-variable
        const img2 = document.getElementById('arrow2') as HTMLImageElement;
        img2.src = '';
        this.button = false;
        this.plus = false;
        this.router.navigateByUrl('before');
      }
    }, 100);
  }

}
