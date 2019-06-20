import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AttendanceDto} from '../dto/AttendanceDto';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private attendanceUrl = '/api/attendance';

  constructor(private httpClient: HttpClient) { }

  create(attendance: AttendanceDto): Observable<AttendanceDto> {
    return this.httpClient.post<AttendanceDto>(this.attendanceUrl, attendance);
  }

}
