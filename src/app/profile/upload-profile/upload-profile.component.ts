import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-upload-profile',
  templateUrl: './upload-profile.component.html',
  styleUrls: ['./upload-profile.component.css']
})
export class UploadProfileComponent implements OnInit {
  uploadProfileForm: FormGroup;
  profilePicImage;
  profilePicAddress: string | SafeUrl = '/assets//dummy-profile-pic.png';
  documentDetails;

  constructor(
    private fb: FormBuilder,
    private profileservice: ProfileService,
    private sanitizer: DomSanitizer,
    private snackbar: MatSnackBar,
    private router: Router
  ) {
    this.uploadProfileForm = this.fb.group({
      profilePicture: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      documents: ['']
    });
  }

  ngOnInit(): void {
  }

  handleImageChange(event): void {
    this.profilePicImage = event.target.files[0];
    const url = URL.createObjectURL(this.profilePicImage);
    this.profilePicAddress = this.sanitizer.bypassSecurityTrustUrl(url);
    console.log(this.profilePicAddress);
    // this.uploadProfileForm.get('profilePicture').setValue(event.target.files[0].name);
  }

  handleChange(event): void {
    console.log(event);
    const documentDetails = event.target.files;
    this.uploadProfileForm.get('documents').setValue(documentDetails);

  }

  async uploadProfile(): Promise<void> {
    try {
      const data = {...this.uploadProfileForm.value, profilePicture: this.profilePicImage};
      const a = await this.profileservice.createnewProfile(data);
      console.log(a, 'check');
      this.snackbar.open('Uploaded successfully', 'close', {duration: 3000});
      this.router.navigate(['/profile']);
    } catch (error) {
      console.log(error);
      this.snackbar.open('Failed to upload', 'close', {duration: 3000});
    }
  }

}
