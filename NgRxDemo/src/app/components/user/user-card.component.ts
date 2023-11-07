import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserRepositoryService } from 'src/app/repository/user-repository/user-repository.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  constructor() { }

  @Input()
  user = {} as User;
  @Input()
  indx: number = 0;

  ngOnInit(): void {

  }

}
