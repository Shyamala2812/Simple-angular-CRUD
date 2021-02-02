import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  profileData;
  constructor(
    private profileservice: ProfileService,
    private route: ActivatedRoute
  ) {
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
