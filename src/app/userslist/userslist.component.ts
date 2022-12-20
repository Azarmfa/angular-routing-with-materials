import { Component } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css'],
})
export class UserslistComponent {
  users: any[] = [
    {
      id: 1,
      name: 'Test1',
      location: 'chennai',
    },
    {
      id: 2,
      name: 'Test2',
      location: 'Salem',
    },
    {
      id: 3,
      name: 'Test3',
      location: 'Trichy',
    },
  ];
}
