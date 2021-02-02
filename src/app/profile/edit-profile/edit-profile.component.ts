import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  editProfileForm: FormGroup;
  profilePicImage;
  profilePicAddress: string | SafeUrl = '/assets//dummy-profile-pic.png';
  profileData;
  constructor(
    private fb: FormBuilder,
    private profileservice: ProfileService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private snackbar: MatSnackBar,
    private router: Router
  ) {

    this.initForm();
    // this.getProfileDetail();
  }

  async getProfileDetail(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    this.profileData = await this.profileservice.getSpecificProfileDetails(id);
    console.log(this.profileData);
    this.profilePicImage = this.profileData.profilePicture;
  }

  handleChange(event): void {
    console.log(event);
    const documentDetails = event.target.files;
    this.editProfileForm.get('documents').setValue(documentDetails);
  }

  initForm(): void {
    this.editProfileForm = this.fb.group({
      profile: [''],
      firstName: [this.profileData?.firstName, Validators.required],
      lastName: [this.profileData?.lastName, Validators.required],
      email: [this.profileData?.email, [Validators.required, Validators.email]],
      mobileNo: [this.profileData?.mobileNo, [Validators.required, Validators.minLength(10)]],
      documents: [this.profileData?.documents]
    });
  }

  handleImageChange(event): void {
    this.profilePicImage = event.target.files[0];
    const url = URL.createObjectURL(this.profilePicImage);
    this.profilePicAddress = this.sanitizer.bypassSecurityTrustUrl(url);
    console.log(this.profilePicAddress);
    // this.uploadProfileForm.get('profilePicture').setValue(event.target.files[0].name);
  }


  async ngOnInit(): Promise<void> {
    await this.getProfileDetail();
    this.initForm();
  }

  async updateProfile(): Promise<void> {
    try {
      const id = this.route.snapshot.paramMap.get('id');
      const data = {...this.editProfileForm.value, profilePicture: this.profilePicImage};
      const a = await this.profileservice.updateSpecificProfileDetails(id, data);
      this.snackbar.open('uploaded successfully', 'close', {duration: 3000});
      this.router.navigate(['profile', id, 'overview']);
    } catch (error) {
      this.snackbar.open('Failed to upload', 'close', {duration: 3000});
      console.log(error);
    }
  }

}
