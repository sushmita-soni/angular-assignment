import { Component } from '@angular/core';
import { UserDetails } from '../Interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  selectedUserRow! : UserDetails;
  userDetails : UserDetails[] = [
    {
      id: 0,
      name : 'Sushmita',
      designation : 'Developer',
      city: 'indore',
      emailAddress: 'sushmita@gmail.com'
    },
    {
      id: 0,
      name : 'Sushmita2',
      designation : 'DevOps',
      city: 'rewa',
      emailAddress: 'sushmita@gmail.com'
    },
    {
      id: 0,
      name : 'Sushmita3',
      designation : 'Testing',
      city: 'rewa',
      emailAddress: 'sushmita@gmail.com'
    }
  ];

  showSelectedUser(event : any) {
    this.selectedUserRow = event;
  }
}


