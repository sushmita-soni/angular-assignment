import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserDetails } from 'src/app/Interface';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent {
    @Input() user! : UserDetails;
    @Output() selectedUser = new EventEmitter<UserDetails>();

    clickToSelectUser(user : UserDetails) {
        this.selectedUser.emit(user);
    }
}
