import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-symbol-digit-modalities-test',
  templateUrl: './symbol-digit-modalities-test.component.html',
  styleUrls: ['./symbol-digit-modalities-test.component.scss']
})
export class SymbolDigitModalitiesTestComponent implements OnInit {


  constructor(private http: HttpClient) {
    this.audioFinished = false;
    this.nextButton = false;
    this.audioButton = true;
  }

  audioFinished: boolean;
  nextButton: boolean;
  audioButton: boolean;
  private userUrl = 'http://localhost:5000';
  counter!: number;
  id!: string | null;

  // tslint:disable-next-line:typedef
  value1: any;
  value2: any;
  value3: any;
  value4: any;
  value5: any;
  value6: any;
  value7: any;
  value8: any;
  value9: any;
  value10: any;
  value11: any;
  value12: any;
  value13: any;
  value14: any;
  value15: any;
  value16: any;
  value17: any;
  value18: any;
  value19: any;
  value20: any;
  value21: any;
  value22: any;
  value23: any;
  value24: any;
  value25: any;
  value26: any;
  value27: any;
  value28: any;
  value29: any;
  value30: any;
  value31: any;
  value32: any;
  value33: any;
  value34: any;
  value35: any;
  value36: any;
  value37: any;
  value38: any;
  value39: any;
  value40: any;
  value41: any;
  value42: any;
  value43: any;
  value44: any;
  value45: any;
  value46: any;
  value47: any;
  value48: any;
  value49: any;
  value50: any;
  value51: any;
  value52: any;
  value53: any;
  value54: any;
  value55: any;
  value56: any;
  value57: any;
  value58: any;
  value59: any;
  value60: any;
  value61: any;
  value62: any;
  value63: any;
  value64: any;
  value65: any;
  value66: any;
  value67: any;
  value68: any;
  value69: any;
  value70: any;
  value71: any;
  value72: any;
  value73: any;
  value74: any;
  value75: any;
  value76: any;
  value77: any;
  value78: any;
  value79: any;
  value80: any;
  value81: any;
  value82: any;
  value83: any;
  value84: any;
  value85: any;
  value86: any;
  value87: any;
  value88: any;
  value89: any;
  value90: any;
  value91: any;
  value92: any;
  value93: any;
  value94: any;
  value95: any;
  value96: any;
  value97: any;
  value98: any;
  value99: any;
  value100: any;
  value101: any;
  value102: any;
  value103: any;
  value104: any;
  value105: any;
  value106: any;
  value107: any;
  value108: any;
  value109: any;
  value110: any;
  value111: any;
  value112: any;
  value113: any;
  value114: any;
  value115: any;
  value116: any;
  value117: any;
  value118: any;
  value119: any;
  value120: any;
  value121: any;
  value122: any;
  value123: any;
  value124: any;
  value125: any;
  value126: any;
  value127: any;
  value128: any;
  value129: any;
  value130: any;
  value131: any;
  value132: any;
  value133: any;
  value134: any;
  value135: any;
  value136: any;
  value137: any;
  value138: any;
  value139: any;
  value140: any;
  value141: any;
  value142: any;
  value143: any;
  value144: any;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  createObject(){
    const sequence = [];

    this.id = sessionStorage.getItem('testIdentifier');

    sequence.push(this.value1, this.value2, this.value3, this.value4,
      this.value5, this.value6, this.value7, this.value8, this.value9,
      this.value10, this.value11, this.value12, this.value13, this.value14,
      this.value15, this.value16, this.value17, this.value18, this.value19,
      this.value20, this.value21, this.value22, this.value23, this.value24,
      this.value25, this.value26, this.value27, this.value28, this.value29,
      this.value30, this.value31, this.value32, this.value33, this.value34,
      this.value35, this.value36, this.value37, this.value38, this.value39,
      this.value40, this.value41, this.value42, this.value43, this.value44,
      this.value45, this.value46, this.value47, this.value48, this.value49,
      this.value50, this.value51, this.value52, this.value53, this.value54,
      this.value55, this.value56, this.value57, this.value58, this.value59,
      this.value60, this.value61, this.value62, this.value63, this.value64,
      this.value65, this.value66, this.value67, this.value68,
      this.value69, this.value70, this.value71, this.value72, this.value73,
      this.value74, this.value75, this.value76, this.value77, this.value78,
      this.value79, this.value80, this.value81, this.value82, this.value83,
      this.value84, this.value85, this.value86, this.value87, this.value88,
      this.value89, this.value90, this.value91, this.value92, this.value93,
      this.value94, this.value95, this.value96, this.value97, this.value98,
      this.value99, this.value100, this.value101, this.value102, this.value103,
      this.value104, this.value105, this.value106, this.value107, this.value108,
      this.value109, this.value110, this.value111, this.value112, this.value113,
      this.value114, this.value115, this.value116, this.value117, this.value118,
      this.value119, this.value120, this.value121, this.value122,
      this.value123, this.value124, this.value125, this.value126, this.value127,
      this.value128, this.value129, this.value130, this.value131, this.value132,
      this.value133, this.value134, this.value135, this.value136, this.value137,
      this.value138, this.value139, this.value140, this.value141, this.value142, this.value143, this.value144, this.id);

    const prova = Object.assign({}, sequence);
    console.log(prova);
    const url = `${this.userUrl}/uploadSymbolTest`;
    this.http.post(url, prova).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }


  // tslint:disable-next-line:typedef
  audio() {
    console.log('called');
    const audio = new Audio();
    audio.src = '../../../assets/audio/countdown.mp3';
    audio.load();
    audio.addEventListener('ended', ev => {
      this.audioFinished = true;
      this.startCountdown(90);
      this.audioButton = false;
    });
    audio.play();
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
        this.audioFinished = false;
        this.nextButton = true;
        this.createObject();
      }
    }, 1000);
  }

}
