import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isBold: boolean = false;
  fontSize: number = 40;
  isItalic : boolean = false;
  isActive : boolean = false;
  isLarge : boolean = false;

  ApplyStyles() {
    const styles = {
      'font-weight' : this.isBold ? 'bold' : 'normal',
      'font-style' : this.isItalic ? 'italic' : 'normal',
      'font-size.px' : this.fontSize
    }
    return styles;
  }

  handleClickEvent() {
    this.isBold = !this.isBold;
    this.isItalic = !this.isItalic;
  }

  handleDivStyleChangeEvent() {
    this.isActive = !this.isActive;
    this.isLarge = !this.isLarge;
  }
}
