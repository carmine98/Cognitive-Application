import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrows-test-real',
  templateUrl: './arrows-test-real.component.html',
  styleUrls: ['./arrows-test-real.component.scss']
})

export class ArrowsTestRealComponent implements OnInit {

  a = [];
  k!: number;

  plus: boolean;
  counterPlus!: number;
  button: boolean;
  answer!: number;
  userAnswer!: string;
  counterAnswer!: number;
  cue1: boolean;
  cue2: boolean;

  // tslint:disable-next-line:variable-name
  constructor() {
    this.cue1 = false;
    this.cue2 = false;
    this.answer = 1.7;
    this.plus = true;
    this.button = false;

    this.k = 0;

    for (let i = 0; i < 96; i++) {
      // @ts-ignore
      this.a[i] = i;
    }
    console.log(this.a);
    this.shuffle(this.a);
    console.log(this.a);


    while (this.k < 96){
      console.log(this.a[this.k]);
      const r = this.getRandomTime(0.4, 1.6) + 1;
      if (this.a[this.k] === 20) {
        this.startTimerCongruentLeftUp(r);
        const interval = setTimeout(() => {
          console.log('pausa');
          this.k++;
        }, 4000);
      } else if (this.a[this.k] === 40){
        this.startTimerCongruentLeftUp(r);
        const interval = setTimeout(() => {
          console.log('pausa');
          this.k++;
        }, 4000);
      }else {
        this.k++;
      }
    }
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // tslint:disable-next-line:typedef
  shuffle(array: number[]) {
    // tslint:disable-next-line:one-variable-per-declaration
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
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
  startTimerCongruentLeftUp(seconds: number) {
    console.log('start');
    let plus = seconds;

    const interval = setInterval(() => {
      console.log(plus);
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
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  prova(){
    console.log('ciao');
    this.incrementK();
  }

  // tslint:disable-next-line:typedef
  incrementK(){
    this.k++;
  }
}
