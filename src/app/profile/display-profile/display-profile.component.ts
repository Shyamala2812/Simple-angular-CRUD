import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.css']
})
export class DisplayProfileComponent implements OnInit {
  profileData;
  constructor(
    private profileservice: ProfileService,
    private route: ActivatedRoute) {
    this.getProfileDetail();
  }

  ngOnInit(): void {
  }

  async getProfileDetail(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    this.profileData = await this.profileservice.getSpecificProfileDetails(id);
    console.log(this.profileData);
  }

}
