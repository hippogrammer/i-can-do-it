import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  ext?: string;
  jobtitle: string;
  company: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url = `${environment.api}/user`;
  constructor(private http: HttpClient) { }
  
  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url);
  }
}
