import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ModuleDto} from '../dto/ModuleDto';
import {SubjectDto} from '../dto/SubjectDto';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private subjectsUrl = '/api/modules';

  constructor(private httpClient: HttpClient) { }

  getSubjects(moduleId: number): Observable<SubjectDto[]> {
    return this.httpClient.get<SubjectDto[]>(`${this.subjectsUrl}?moduleId=${moduleId}`);
  }
}
