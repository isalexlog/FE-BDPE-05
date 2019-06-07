import { Injectable } from '@angular/core';
import {UserDto} from '../dto/UserDto';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = '/users';

  constructor(private http: HttpClient) { }

  create(user: UserDto) {
    return this.http.post<UserDto>(this.userUrl, user);
  }

  update(user: UserDto): Observable<UserDto> {
    return this.http.put<UserDto>(this.userUrl + '/' + user.id, user);
  }
}
