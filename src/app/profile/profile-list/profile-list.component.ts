import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profileList: any = [1, 2, 3, 4, 5];
  constructor(
    private profileservice: ProfileService,
    private snackbar: MatSnackBar) {
    this.getAllProfiles();
  }

  ngOnInit(): void {
  }

  async getAllProfiles(): Promise<void> {
    this.profileList = await this.profileservice.getAllProfileDetails();
  }


  async deleteProfile(data): Promise<void> {
    try {
      const id = data;
      await this.profileservice.deleteProfileDetails(id);
      this.getAllProfiles();
      this.snackbar.open('deleted successfully', 'close', {duration: 3000});
    } catch (error) {
      this.snackbar.open('Failed to delete', 'close', {duration: 3000});
      console.log(error);
    }
  }
}
