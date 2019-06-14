import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SubjectDto} from '../dto/SubjectDto';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private subjectUrl = '/api/subjects';


  constructor(private httpClient: HttpClient) {
  }

  getSubjects(moduleId: number): Observable<SubjectDto[]> {
    return this.httpClient.get<SubjectDto[]>(`${this.subjectUrl}?moduleId=${moduleId}`);
  }


}
