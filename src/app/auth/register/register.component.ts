import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  classList : string = 'class1 class2';
  classArray = ['class1', 'class2',  'class3'];
  classMap =  {
    'class1' : true,
    'class2' : false,
    'class3' : true
  }
}
