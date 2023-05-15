import { Component } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  constructor() {
    this.user = new User('Doe', 'John', 25, '', 'https://randomuser.me/api/portraits/lego/2.jpg');
  }
  
  user: User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  hideAge = false;

  toggleAgeVisibility() {
    this.hideAge = !this.hideAge;
  }

}
