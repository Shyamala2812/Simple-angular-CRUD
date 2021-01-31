import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profileList = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit(): void {
  }

}
