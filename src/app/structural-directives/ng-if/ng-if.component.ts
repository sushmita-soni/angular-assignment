import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent {
  hero : boolean = true;
  isLogin : boolean = true;
  buttonText : string = 'show';

  hideTitle() {
    this.hero = !this.hero;
    if(this.hero) {
      this.buttonText = 'hide';
    } else {
      this.buttonText = 'show';
    }
  }

  changeAction() {
    this.isLogin = !this.isLogin;
  }
}
