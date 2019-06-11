import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GroupDto} from '../dto/GroupDto';
import {retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private groupsUrl = '/api/groups';

  constructor(private http: HttpClient) {
  }

  getGroups(): Observable<GroupDto[]> {
    return this.http.get<GroupDto[]>(this.groupsUrl)
      .pipe(
        retry(2),
      );
  }

}
