import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy {
  users: User[]= [];
  user$: Subscription;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {

    this.user$ = this.userService.getUsers()
    .subscribe(users => {
      this.users = users;
    });

  }

  ngOnDestroy() {
    this.user$.unsubscribe();
  }
}