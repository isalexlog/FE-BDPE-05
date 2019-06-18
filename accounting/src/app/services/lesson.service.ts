import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LessonDto} from '../dto/LessonDto';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private lessonUrl = '/api/lessons';

  constructor(private httpClient: HttpClient) { }

  create(lesson: LessonDto) {
    return this.httpClient.post<LessonDto>(this.lessonUrl, lesson);
  }

}
