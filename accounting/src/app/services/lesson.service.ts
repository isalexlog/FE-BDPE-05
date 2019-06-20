import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LessonDto} from '../dto/LessonDto';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private lessonUrl = '/api/lessons';

  constructor(private httpClient: HttpClient) { }

  create(lesson: LessonDto):Observable<LessonDto> {
    return this.httpClient.post<LessonDto>(this.lessonUrl, lesson);
  }

}
