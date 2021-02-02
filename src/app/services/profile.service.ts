import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsService } from './settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient,
    private settings: SettingsService
  ) { }

  private makeFormData(data: any): FormData {
    const formData = new FormData();
    Object.keys(data).forEach(k => {
      if (data[k] instanceof FileList) {
        [...data[k]].forEach(f => formData.append(k, f));
      } else {
        formData.append(k, data[k]);
      }
    });

    return formData;
  }

  createnewProfile(data): Promise<any> {
    const formData = this.makeFormData(data);
    const url = `${this.settings.API_BASE_URL}/create`;
    return this.http.post(url, formData).toPromise();
  }

  getAllProfileDetails(): Promise<any> {
    const url = `${this.settings.API_BASE_URL}/all`;
    return this.http.get(url).toPromise();
  }

  getSpecificProfileDetails(id): Promise<any> {
    const url = `${this.settings.API_BASE_URL}/${id}`;
    return this.http.get(url).toPromise();
  }

  updateSpecificProfileDetails(id, data: any): Promise<any> {
    const url = `${this.settings.API_BASE_URL}/${id}`;
    const formData = this.makeFormData(data);
    return this.http.put(url, formData).toPromise();
  }

  deleteProfileDetails(id): Promise<any> {
    const url = `${this.settings.API_BASE_URL}/${id}`;
    return this.http.delete(url).toPromise();
  }
}
