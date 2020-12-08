import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {


  constructor(private router: Router) {

  }

  ngOnInit(): void {
    let button = document.getElementById('buttonLogin');
      navigator.permissions.query(
        { name: 'microphone' }
      ).then((permissionStatus) => {
        if (permissionStatus.state === 'granted'){
          // @ts-ignore
          button.style.display = 'block';
        }else {
          // @ts-ignore
          button.style.display = 'none'
        }
        permissionStatus.onchange = () =>{
          console.log(permissionStatus.state);// granted, denied, prompt
          if (permissionStatus.state === 'granted' || permissionStatus.state === 'prompt'){
            // @ts-ignore
            button.style.display = 'block';
          }else {
            // @ts-ignore
            button.style.display = 'none'
          }
        }
      })

  }

  goToLogin(){
    this.router.navigateByUrl("/login");
  }

}
