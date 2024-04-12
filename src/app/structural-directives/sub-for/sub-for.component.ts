import { Component } from '@angular/core';
import { UserDetails } from 'src/app/Interface';

@Component({
  selector: 'app-sub-for',
  templateUrl: './sub-for.component.html',
  styleUrls: ['./sub-for.component.scss']
})
export class SubForComponent {
    userDetails : UserDetails[] = [
      {
        id: 0,
        name : 'sushmita',
        designation : 'developer',
        city: 'indore',
        emailAddress: 'sushmita@gmail.com'
      },
      {
        id: 0,
        name : 'sushmita2',
        designation : 'developer',
        city: 'rewa',
        emailAddress: 'sushmita@gmail.com'
      }
  ]
}
