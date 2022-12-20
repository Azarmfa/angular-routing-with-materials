import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  userDetails: any;
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
  constructor(private activateRoute: ActivatedRoute) {
    let routerId = this.activateRoute.snapshot.paramMap.get('id');
    console.log(routerId);
    let userfiltered = this.users.filter((user) => user.id == routerId);
    console.log(userfiltered);
    this.userDetails = userfiltered[0];
  }
}
